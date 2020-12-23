import React, { useState, useEffect } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { findFavorites } from "../../api/user";

import Header from "../../components/Header";
import Empty from "../../components/Empty";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import userPhoto from "../../assets/defaultUserImage.png";
import heartRed from "../../assets/heartRed.png";
import normalHeart from "../../assets/normalHeart.png";

function ProfCards({ route }) {

  const { teachers } = route.params;

  const navigation = useNavigation();
  const msg = "Oops...";
  const msg2 = "Nenhum professor encontrado";

  const [index, setIndex] = useState(0);

  const onSwipe = () => {
    setIndex(index + 1);
  };

  function toProfInfo(card) {
    navigation.navigate("ProfInfo", { card });
  }

  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        {teachers.length && teachers.length !== index ? (
          <Swiper
            backgroundColor={"transparent"}
            useViewOverflow={Platform.OS === "ios"}
            cards={teachers}
            cardIndex={index}
            renderCard={(teacher) =>
              teacher && (
                <View style={styles.card}>
                  <View style={styles.infoFoto}>
                    {teacher.foto ? (
                      <Image
                        source={{ uri: teacher.foto }}
                        style={styles.cardImage}
                      />
                    ) : (
                      <Image
                        source={userPhoto}
                        style={styles.cardDefaultImage}
                      />
                    )}
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.profName}>{teacher.nome}</Text>
                    {teacher.email && (
                      <Text style={styles.profEmail}>{teacher.email}</Text>
                    )}
                    <TouchableOpacity onPress={() => toProfInfo(teacher)}>
                      <Text style={styles.profInfo}>
                        Informações Acadêmicas
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
            onSwiped={onSwipe}
            stackSize={12}
            stackScale={10}
            stackSeparation={18}
            disableTopSwipe
            disableBottomSwipe
            animateCardOpacity
          />
        ) : (
          <Empty msg={msg} msg2={msg2} />
        )}
      </View>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    teachers: state.teachers.teachersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProf: (id) => {
      dispatch({ type: "DELETE_PROF", id: id });
    },
    updateProfList: (profList) => {
      dispatch({ type: "UPDATE_PROF", profList: profList });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfCards);
