import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import arrow from "../../assets/arrow-right.png";
import googleIcon from "../../assets/google.jpg";
import faceIcon from "../../assets/face.png";

export default function Login() {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>
                    Digite sua palavra chave:{" "}
                </Text>
                <View style={styles.arrowText}>
                    {/* <Image source={arrow} style={styles.arrow} /> */}
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
                    <Feather name="mail" size={40} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("google clicked")}>
                    <Image source={googleIcon} style={styles.googleIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("face clicked")}>
                    <Image source={faceIcon} style={styles.faceIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
