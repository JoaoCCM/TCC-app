import React, { useContext, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import globalStyles from "../../globalStyle/globalStyles";
import { loginContext } from "../../Context/loginContext";
import styles from "./styles";
import arrow from "../../assets/arrow.png";

import Login from "../Login";
import Header from "../../components/Header";
import HomeLogged from "../../components/HomeLogged";

export default function Home() {
    const { logged, setLogin } = useContext(loginContext);

    useEffect(() => {
        const getUserData = async () => {
            const userData = await AsyncStorage.getItem("userData");
            setLogin(!!userData);
            console.log(userData)
        };
        getUserData();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <Header />
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>
                        Digite sua palavra chave:
                    </Text>
                    <View style={styles.arrowText}>
                        <Image source={arrow} style={styles.arrow} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: Web"
                            underlineColorAndroid="#333"
                            accessibilityLabel="Search Input"
                            onChange={() => {}}
                        />
                    </View>
                </View>
                {logged ? <HomeLogged /> : <Login />}
            </View>
        </TouchableWithoutFeedback>
    );
}
