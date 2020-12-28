import React, { useContext } from "react";
import Swipeable from "react-native-swipeable";
import { View, Text, TouchableOpacity, Image, FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";

import { favoritesContext } from "../../Context/favoritesContext"
import Empty from "../Empty";
import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";
import sendMail from "../../assets/Logar-Email.png";

const btns = [
  <TouchableOpacity onPress={() => {}} style={styles.touch}>
    <Feather name="trash-2" style={styles.deleteText} size={27} color="#fff" />
  </TouchableOpacity>,
];

function HomeLogged() {
  const { favoriteTeacher, removeFromFavorites } = useContext(favoritesContext);
  const navigation = useNavigation();

  const msg = "Nenhum professor salvo.";
  const msg2 = "Comece agora!";

  const toFavorites = () => navigation.navigate("Favorites");

  return favoriteTeacher.length ? (
    <View style={styles.profListContainer}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <FlatList
          style={styles.favList}
          data={favoriteTeacher}
          showsVerticalScrollIndicator={false}
          keyExtractor={(favoriteTeacher) => String(favoriteTeacher.id)}
          renderItem={({ item: prof }) => (
            <Swipeable
              leftButtons={btns}
              onLeftActionRelease={() => removeFromFavorites(prof.id)}
            >
              <TouchableOpacity onPress={toFavorites}>
                <View style={styles.listContainer}>
                  <Image source={profilePic} style={styles.profilePic} />
                  <Text style={styles.profName}>{prof.nome}</Text>
                  <TouchableOpacity
                    onPress={() => console.log("mail composer")}
                  >
                    <Image source={sendMail} style={styles.sendMail} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Swipeable>
          )}
        />
      </KeyboardAvoidingView>
    </View>
  ) : (
    <View style={styles.profListContainer}>
      <Empty msg={msg} msg2={msg2} />
    </View>
  );
}

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLogged);
