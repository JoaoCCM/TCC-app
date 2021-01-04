import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Header from "../../components/Header";
import { favoritesContext } from "../../Context/favoritesContext"

import profilePic from "../../assets/defaultUserImage.png";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";

const Favorites = () => {
  const navigation = useNavigation();
  const { favoriteTeacher, removeFromFavorites, changeOrder } = useContext(favoritesContext);

  const handleChangeOrder = ({ data }) => changeOrder(data);

  function toProfInfo(teacher) {
    navigation.navigate("ProfInfo", { teacher });
  }

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
        style={styles.itemContainer}
        onPress={() => toProfInfo(item)}
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
            {item.foto ? (
                <Image
                  source={{ uri: item.foto }}
                  style={styles.profilePic}
                />
              ) : (
                <Image source={profilePic} style={styles.profilePic} />
              )}
            <Text style={styles.profName}>{item.nome}</Text>
            <TouchableOpacity
              onPress={() => removeFromFavorites(item.id)}
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Salvos</Text>
      </View>
      {favoriteTeacher ? (
        <View style={styles.draggableContainer}>
          <DraggableFlatList
            data={favoriteTeacher}
            renderItem={renderItem}
            keyExtractor={(item) => `draggable-item-${item.id}`}
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

export default Favorites;
