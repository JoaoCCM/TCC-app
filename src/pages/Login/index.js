import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import CadastroDialog from "../components/cadastroDialog";

import styles from "./styles";
import emailIcon from "../../assets/Logar-Email.png";
import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import LoginForm from "../LoginForm";

export default function Login() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cadastroOpen, setCadastroOpen] = useState(false);

    function closeDialog() {
        setCadastroOpen(!cadastroOpen);
    }
    return (
        <View style={styles.loginContainer}>
            <CadastroDialog visible={cadastroOpen} closeDialog={closeDialog} />
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.register}>
                        <Text style={styles.registerText}>Cadastre-se</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.or}>
                <Text style={styles.orText}>ou</Text>
            </View>
            <View style={styles.loginOpt}>
                <TouchableOpacity onPress={() => setCadastroOpen(true)}>
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
