import React, { useEffect, useState, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import DropDownItem from "react-native-drop-down-item";

import { getTeacherInfo } from "../../api/teacher";
import { loginContext } from "../../Context/loginContext";
import { favoritesContext } from "../../Context/favoritesContext";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import VoltarLink from "../../components/VoltarLink";
import photo from "../../assets/defaultUserImage.png";
import arrowUp from "../../assets/ArrowUp.png";
import arrowDown from "../../assets/ArrowDown.png";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";

const ProfInfo = ({ route }) => {
  const {
    favoriteTeacher,
    removeFromFavorites,
    addTeacherAsFavorite,
  } = useContext(favoritesContext);
  const { logged } = useContext(loginContext);

  const { teacher } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState([]);
  const [teacherInfos, setTeacherInfos] = useState();
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    getSearchParams();
    requestTeacherInfo();
  }, []);

  const checkIfTeacherIsFavorite = (teacherId) => {
    return favoriteTeacher.some(({ id }) => id === teacherId);
  };

  const getSearchParams = async () => {
    setIsLoading(true);

    const searchParams = await AsyncStorage.getItem("searchParams");

    setIsLoading(false);

    setSearchParams(JSON.parse(searchParams));
  };

  const requestTeacherInfo = async () => {
    const query = { name: `"${teacher.nome}"` };

    setIsLoading(true);
    const { data } = await getTeacherInfo(query);
    setIsLoading(false);

    setTeacherInfos(data);
  };

  const handleAddNewFavorite = async (teacher, searchParams) => {
    const { id, nome, email, foto } = teacher;

    addTeacherAsFavorite({ id, nome, email, foto }, searchParams);
  };

  const handleRemoveFavorite = (id) => removeFromFavorites(id);

  const favorite = (teacher) => {
    if (!checkIfTeacherIsFavorite(teacher.id)) {
      return handleAddNewFavorite(teacher, searchParams);
    }
    return handleRemoveFavorite(teacher.id);
  };

  const getHeartIcon = (teacherId) => {
    return checkIfTeacherIsFavorite(teacherId) ? "heart" : "heart-outline";
  };

  const getFormattedText = (item, value) => {
    switch (item) {
      case "AreaAtuacao":
        return (
          <View>
            <Text style={styles.title}>{formatTitle[item]}</Text>
            <FlatList
              style={styles.listAreas}
              data={value}
              renderItem={({ item }) => (
                <Text key={item} style={styles.listItem}>
                  {item}
                </Text>
              )}
            />
          </View>
        );

      case "ProjetoPesquisa":
        return (
          <View>
            <Text style={styles.title}>{formatTitle[item]}</Text>
            <FlatList
              style={styles.listAreas}
              data={value}
              renderItem={({ item: { properties } }) => (
                <Text key={properties.nome} style={styles.listItem}>
                  {properties.nome}
                </Text>
              )}
            />
          </View>
        );

      case "FormacaoAcademica":
        return (
          <View>
            <Text style={styles.title}>{formatTitle[item]}</Text>
            <FlatList
              style={styles.listAreas}
              data={value}
              renderItem={({ item: { properties, relationshipProp } }) => (
                <View key={properties.nome}>
                  <Text style={styles.listItem}>
                    <Text style={styles.bold}>
                      {properties.tipo}
                      {": "}
                    </Text>
                    {relationshipProp.nome_instituicao}
                  </Text>
                </View>
              )}
            />
          </View>
        );

      case "Orientacao":
        return (
          <View>
            <Text style={styles.title}>{formatTitle[item]}</Text>
            <FlatList
              style={styles.listAreas}
              data={value}
              renderItem={({ item: { properties } }) => (
                <View key={properties.nome}>
                  <Text style={styles.listItem}>
                    <Text style={styles.bold}>
                      {properties.tipo}
                      {": "}
                    </Text>
                    {properties.tituloTrabalho}
                  </Text>
                </View>
              )}
            />
          </View>
        );

      case "Idioma":
        return (
          <View>
            <Text style={styles.title}>{formatTitle[item]}</Text>
            <FlatList
              style={styles.listAreas}
              data={value}
              renderItem={({ item: { properties, relationshipProp } }) => (
                <View key={properties.nome}>
                  <Text style={styles.listItem}>
                    <Text style={styles.bold}>
                      {properties.nome}
                      {": "}
                    </Text>
                    {relationshipProp.proficiencia}
                  </Text>
                </View>
              )}
            />
          </View>
        );

      default:
        return <Text style={styles.modalText}>{'Por favor consulte o administrador do sistema'}</Text>;
    }
  };

  const handleShowInfos = (item) => {
    const newContent = getFormattedText(item, teacherInfos[item].items);
    setModalContent(newContent);
    setModalVisible(true);
  };

  const formatTitle = {
    ProjetoPesquisa: "Projetos e Pesquisas",
    Orientacao: "Orientações",
    Idioma: "Idiomas",
    FormacaoAcademica: "Formação Acadêmica",
    AreaAtuacao: "Áreas de Atuação",
  };

  if (!favoriteTeacher || !teacherInfos) return <Loading />;

  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0.1}
          swipeDirection={["down"]}
          swipeDirection={null}
          onBackdropPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView}>
            <View style={styles.modalClose}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <MaterialCommunityIcons name="close" size={30} />
              </TouchableOpacity>
            </View>
            {modalContent}
          </View>
        </Modal>
        <VoltarLink />
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
              {logged && (
                <TouchableOpacity onPress={() => favorite(teacher)}>
                  <MaterialCommunityIcons
                    name={getHeartIcon(teacher.id)}
                    size={30}
                    style={styles.heart}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.profNome}>{teacher.nome}</Text>
            <View style={styles.info}>
              {Object.keys(teacherInfos).map((item) =>
                item !== "Aluno" ? (
                  <TouchableOpacity
                    key={item}
                    onPress={() => handleShowInfos(item)}
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
};

export default ProfInfo;
