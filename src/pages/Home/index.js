import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as _ from "lodash";

import { searchForTerms } from "../../api/teacher";
import { loginContext } from "../../Context/loginContext";
import Login from "../Login";
import Header from "../../components/Header";
import HomeLogged from "../../components/HomeLogged";

import arrow from "../../assets/arrow.png";
import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const { logged, setLogin } = useContext(loginContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem("userData");
      setLogin(!!userData);
    };
    getUserData();
  }, []);

  const toCards = async () => {
    const teacherList = await getSearchForTerm();
    const teachers = teacherList ?? [];
    await AsyncStorage.setItem("searchParams", JSON.stringify([searchText]));

    setSearchText('');
    navigation.navigate("ProfCards", { teachers });
  };

  const getSearchForTerm = async () => {
    const { data } = await searchForTerms({ search: searchText });

    const joinArrays = _.flattenDeep(data);

    return _.uniqWith(joinArrays, _.isEqual);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Header />
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Digite sua palavra chave:</Text>
          <View style={styles.arrowText}>
            <TextInput
              style={styles.input}
              placeholder="Ex: Web"
              underlineColorAndroid="#333"
              accessibilityLabel="Search Input"
              onChangeText={(text) => setSearchText(text)}
              defaultValue={searchText}
            />
            <TouchableOpacity onPress={toCards}>
              <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
          </View>
        </View>
        {logged ? <HomeLogged /> : <Login />}
      </View>
    </TouchableWithoutFeedback>
  );
}
