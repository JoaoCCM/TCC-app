import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DraggableFlatList from "react-native-draggable-flatlist";

import { View, TouchableOpacity, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";

import { findFavorites } from "../../api/user";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Swipeable from "react-native-gesture-handler/Swipeable";

import profilePic from "../../assets/defaultUserImage.png";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";

const Favorites = ({ changeOrder, deleteProf, favorProfs, updateList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState(favorProfs);

  useEffect(() => {
    getUserFavorites();
  }, []);

  const getUserFavorites = async () => {
    setIsLoading(true);
    const newToken = await AsyncStorage.getItem("userData");

    const { data } = await findFavorites(newToken.replace(/"/g, ""));

    const favoriteProf = data.reduce(
      (acc, item, index) => [
        ...acc,
        { id: index + 1, nome: item.nome, email: item.email },
      ],
      []
    );

    updateList(favoriteProf);
    setFavoriteList(favoriteProf);
    setIsLoading(false);
  };

  const handleChangeOrder = (newState) => {
    changeOrder(newState.data);
  };

  const handleDeleteProf = (id) => {
    deleteProf(id);
  };

  const getRightContent = () => {
    return (
      <TouchableOpacity>
        <Feather name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.itemContainer,
        }}
      >
        <Swipeable onSwipeableLeftOpen={getRightContent}>
          <View
            style={{
              ...styles.listContainer,
              elevation: isActive ? 3 : 1,
            }}
          >
            <TouchableOpacity onPressIn={drag}>
              <MaterialCommunityIcons name="drag" size={40} />
            </TouchableOpacity>
            <Image source={profilePic} style={styles.profilePic} />
            <Text style={styles.profName}>{item.nome}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteProf(item.id)}
              style={styles.trash}
            >
              <Feather name="trash-2" color="red" size={22} />
            </TouchableOpacity>
          </View>
        </Swipeable>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.container}>
      <Header />
      {isLoading && <Loading backgroundColor="rgba(0,0,0,0.2)" />}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Salvos</Text>
      </View>
      {favorProfs ? (
        <View style={styles.draggableContainer}>
          <DraggableFlatList
            data={favorProfs}
            renderItem={renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.id}`}
            onDragEnd={({ data }) => handleChangeOrder({ data })}
          />
        </View>
      ) : (
        <View style={styles.msgContainer}>
          <Text style={styles.msg}>
            Você não possui nenhum professor salvo ainda!
          </Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    favorProfs: state.user.favorProfs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProf: (id) => {
      dispatch({ type: "DELETE_PROF", id: id });
    },
    updateList: (newState) => {
      dispatch({ type: "UPDATE_LIST", newState: newState });
    },
    changeOrder: (newState) => {
      dispatch({ type: "CHANGE_ORDER", newState: newState });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
