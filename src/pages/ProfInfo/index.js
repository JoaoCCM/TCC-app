import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { findFavorites, addFavorite, removeFavorite } from "../../api/user";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import photo from "../../assets/defaultUserImage.png";

import Header from "../../components/Header";
import VoltarLink from "../../components/VoltarLink";

export default function ProfInfo({ route }) {
  const { card: teacher } = route.params;
  const navigation = useNavigation();
  const [favoriteList, setFavoriteList] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    getUserFavorites();
  }, []);

  const getUserFavorites = async () => {
    const newToken = await AsyncStorage.getItem("userData");

    const { data } = await findFavorites(newToken.replace(/"/g, ""));

    const favoriteProf = data.reduce((acc, item) => [...acc, item.nome], []);
    setToken(newToken.replace(/"/g, ""));
    setFavoriteList(favoriteProf);
  };

  const handleAddNewFavorite = async (nome) => {
    const body = {
      teacherInfo: { nome },
      searchParams: ["Java", "Exatas"],
    };
    const { status } = await addFavorite({ token, body });

    if ([200, 204].includes(status)) {
      addFavorite({ token, body });
      setFavoriteList([...favoriteList, nome]);
    }
  };

  const handleRemoveFavorite = async (nome) => {
    const body = {
      teacherInfo: { nome },
    };
    const { status } = await removeFavorite({ token, body });

    if ([200, 204].includes(status)) {
      const newList = favoriteList.filter((prof) => prof !== nome);
      setFavoriteList(newList);
    }
  };

  const favorite = (teacher) => {
    if (!favoriteList.includes(teacher)) {
      return handleAddNewFavorite(teacher);
    }
    return handleRemoveFavorite(teacher);
  };

  const getHeartTime = (teacher) =>
    favoriteList.includes(teacher) ? "heart" : "heart-outline";

  if (!favoriteList) return null;

  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <VoltarLink />
        <View style={styles.title}>
          <Text style={styles.titleText}>Salvo</Text>
        </View>
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
              <Text style={styles.profNome}>{teacher.name}</Text>
              <TouchableOpacity onPress={() => favorite(teacher.nome)}>
                <MaterialCommunityIcons
                  name={getHeartTime(teacher.nome)}
                  size={30}
                  style={styles.heart}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.info}>
              <TouchableOpacity>
                <Text style={styles.textinfo}>Linha de pesquisa</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textinfo}>Projetos de pesquisa</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textinfo}>Produções</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textinfo}>Banca</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
