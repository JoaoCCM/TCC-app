import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons"

import styles from "./styles";
import emailIcon from "../../assets/Logar-Email.png";
import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import LoginForm from '../LoginForm';


export default function Login() {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <View style={styles.loginContainer}>
            <View style={styles.modalContainer}>
                <Modal visible={modalOpen} animationType="slide">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <Feather
                                name="x-circle"
                                size={27}
                                style={{
                                    ...styles.modalToggle,
                                    ...styles.modalClose
                                }}
                                onPress={() => setModalOpen(false)}
                            />
                            <LoginForm />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
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
                <TouchableOpacity onPress={() => setModalOpen(true)}>
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
