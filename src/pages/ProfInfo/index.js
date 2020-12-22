import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { findFavorites, addFavorite, removeFavorite } from "../../api/user";
import { getTeacherInfo } from "../../api/teacher";
import Loading from "../../components/Loading";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import photo from "../../assets/defaultUserImage.png";

import Header from "../../components/Header";
import VoltarLink from "../../components/VoltarLink";

export default function ProfInfo({ route }) {
  const { card: teacher } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState();
  const [teacherInfos, setTeacherInfos] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    getUserFavorites();
    requestTeacherInfo();
    getSearchParams();
  }, []);

  const getSearchParams = async () => {
    const searchParams = await AsyncStorage.getItem("searchParams")

    return searchParams
  };

  const getUserFavorites = async () => {
    setIsLoading(true);
    const newToken = await AsyncStorage.getItem("userData");

    const { data } = await findFavorites(newToken.replace(/"/g, ""));

    const favoriteProf = data.reduce((acc, item) => [...acc, item.nome], []);
    setToken(newToken.replace(/"/g, ""));
    setFavoriteList(favoriteProf);
    setIsLoading(false);
  };

  const requestTeacherInfo = async () => {
    const query = { name: `"${teacher.nome}"` };

    setIsLoading(true);
    const { data } = await getTeacherInfo(query);
    setIsLoading(false);

    setTeacherInfos(data);
  };

  const handleAddNewFavorite = async (nome) => {
    const searchParams = await getSearchParams()
    const body = {
      teacherInfo: { nome },
      searchParams: JSON.parse(searchParams),
    };
    setIsLoading(true);
    const { status } = await addFavorite({ token, body });

    if ([200, 204].includes(status)) {
      setFavoriteList([...favoriteList, nome]);
    }
    setIsLoading(false);
  };

  const handleRemoveFavorite = async (nome) => {
    const body = {
      teacherInfo: { nome },
    };
    setIsLoading(true);
    const { status } = await removeFavorite({ token, body });

    if ([200, 204].includes(status)) {
      const newList = favoriteList.filter((prof) => prof !== nome);
      setFavoriteList(newList);
    }
    setIsLoading(false);
  };

  const favorite = (teacher) => {
    if (!favoriteList.includes(teacher)) {
      return handleAddNewFavorite(teacher);
    }
    return handleRemoveFavorite(teacher);
  };

  const getHeartTime = (teacher) =>
    favoriteList.includes(teacher) ? "heart" : "heart-outline";

  if (!favoriteList || !teacherInfos) return <Loading />;

  const formatTitle = {
    ProjetoPesquisa: "Projetos e Pesquisas",
    Orientacao: "Orientações",
    Idioma: "Idiomas",
    FormacaoAcademica: "Formação Acadêmica",
    AreaAtuacao: "Áreas de Atuação",
  };

  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalClose}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <MaterialCommunityIcons name="close" size={30} />
                </TouchableOpacity>
              </View>

              <Text style={styles.modalText}>Hello World!</Text>
            </View>
          </View>
        </Modal>
        <VoltarLink />
        <View style={styles.title}>
          <Text style={styles.titleText}>Salvo</Text>
        </View>
        {isLoading && <Loading backgroundColor="rgba(0,0,0,0.2)" />}
        <View style={styles.align}>
          <View style={styles.infoContainer}>
            <View style={styles.prof}>
              {teacher.foto ? (
                <Image
                  source={{ uri: teacher.foto }}
                  style={styles.profImage}
                />
              ) : (
                <Image source={photo} style={styles.profImage} />
              )}
              <TouchableOpacity onPress={() => favorite(teacher.nome)}>
                <MaterialCommunityIcons
                  name={getHeartTime(teacher.nome)}
                  size={30}
                  style={styles.heart}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.profNome}>{teacher.nome}</Text>
            <View style={styles.info}>
              {Object.keys(teacherInfos).map((item) =>
                item !== "Aluno" ? (
                  <TouchableOpacity
                    key={item}
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  >
                    <Text style={styles.textinfo}>
                      {formatTitle[item] ?? item}
                    </Text>
                  </TouchableOpacity>
                ) : null
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
