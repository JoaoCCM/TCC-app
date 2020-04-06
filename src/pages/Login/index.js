import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import arrow from "../../assets/arrow.png";
import emailIcon from "../../assets/Logar-Email.png";
import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import Header from "../../pages/Header";

export default function Login() {
    return (
        <View style={styles.loginContainer}>
            <Header />
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Digite sua palavra chave:</Text>
                <View style={styles.arrowText}>
                    <Image source={arrow} style={styles.arrow} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Web"
                        underlineColorAndroid="#333"
                        accessibilityLabel="search input"
                        // value={}
                        onChange={() => {}}
                    />
                </View>
            </View>

            <View>
                <View style={styles.register}>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </View>
            </View>

            <View style={styles.or}>
                <Text style={styles.orText}>ou</Text>
            </View>

            <View style={styles.loginOpt}>
                <TouchableOpacity onPress={() => console.log("mail clicked")}>
                    <Image source={emailIcon} style={styles.loginIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("face clicked")}>
                    <Image source={faceIcon} style={styles.loginIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("google clicked")}>
                    <Image source={googleIcon} style={styles.loginIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
