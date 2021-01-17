import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CadastroDialog from "../../components/CadastroDialog";

import styles from "./styles";
import emailIcon from "../../assets/Logar-Email.png";
import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";
import { favoritesContext } from "../../Context/favoritesContext"

import Cadastro from "../Cadastro";

export default function Login() {
    const { getFavorites } = useContext(favoritesContext);

    const [emailLoginOpen, setEmailLoginOpen] = useState(false);

    const favorite = async () => {
      await getFavorites();
    }

    const closeDialog = () => {
      setEmailLoginOpen(!emailLoginOpen);
    }

    const navigation = useNavigation();

    const toCadastro = () => {
        navigation.push("Register");
    };

    return (
        <View style={styles.loginContainer}>
            <CadastroDialog
                visible={emailLoginOpen}
                closeDialog={closeDialog}
                favorite={favorite}
            />
            <View>
                <TouchableOpacity onPress={toCadastro}>
                    <View style={styles.register}>
                        <Text style={styles.registerText}>Cadastre-se</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.or}>
                <Text style={styles.orText}>ou</Text>
            </View>
            <View style={styles.loginContent}>
                <Text style={styles.loginText}>Entre</Text>
                <View style={styles.loginOpt}>
                    <TouchableOpacity onPress={() => setEmailLoginOpen(true)}>
                        <Image source={emailIcon} style={styles.loginIcon} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => console.log("face clicked")}
                    >
                        <Image source={faceIcon} style={styles.loginIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log("google clicked")}
                    >
                        <Image source={googleIcon} style={styles.loginIcon} />
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
}
