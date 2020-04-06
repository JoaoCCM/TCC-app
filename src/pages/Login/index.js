import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import emailIcon from "../../assets/Logar-Email.png";
import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

export default function Login() {
    return (
        <View style={styles.loginContainer}>
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
