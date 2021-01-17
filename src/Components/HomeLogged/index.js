import React, { useContext, useState, useEffect } from "react";
import Swipeable from "react-native-swipeable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from 'expo-mail-composer';

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
  const [userName, setUserName] = useState('')
  const message = `Olá Professor(a), gostaria de conversar sobre uma possível orientação para o meu TCC. \n\n Quando seria o melhor horário? \n\n\n Atenciosamente, ${userName}`

  function sendMailFunction(email) {
    try{
      MailComposer.composeAsync({
        subject: `Orientação para o TCC`,
        recipients: [email],
        body: message
      })
    }catch(e){
      console.error('error', e)
    }
  }

  const msg = "Nenhum professor salvo.";
  const msg2 = "Comece agora!";

  useEffect(() => {
    const getUserName = async () => {
      const nome = await AsyncStorage.getItem("userNome")
      setUserName(nome.replace(/"/g, ''))
    }

    getUserName()
  }, [])

  const toTeacherDetails = (teacher) => navigation.navigate("ProfInfo", { teacher });

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
              <TouchableOpacity onPress={() => toTeacherDetails(prof)}>
                <View style={styles.listContainer}>
                  {prof.foto ? (
                    <Image
                      source={{ uri: prof.foto }}
                      style={styles.profilePic}
                    />
                  ) : (
                    <Image source={profilePic} style={styles.profilePic} />
                  )}
                  <Text style={styles.profName}>{prof.nome}</Text>
                  <TouchableOpacity
                    onPress={() => sendMailFunction(prof.email)}
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

export default HomeLogged;
