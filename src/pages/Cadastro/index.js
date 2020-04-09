import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";

import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import styles from "./styles";
import stylesFormik from "../LoginForm/styles";
import globalStyles from "../../globalStyle/globalStyles";

import Header from "../Header";
import VoltarLink from "../components/VoltarLink";
import EyeShowPasswd from "../components/EyeShowPasswd";

import CadastroDialog from "../components/cadastroDialog";

export default function Cadastro() {
    const [showPass, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState("eye-off");
    const [emailLoginOpen, setEmailLoginOpen] = useState(false);

    function closeDialog() {
        setEmailLoginOpen(!emailLoginOpen);
    }

    function showPassword() {
        setShowPassword(!showPass);
        showPass ? setEyeIcon("eye-off") : setEyeIcon("eye");
    }
    return (
        <View style={globalStyles.container}>
            <Header />
            <CadastroDialog
                visible={emailLoginOpen}
                closeDialog={closeDialog}
            />
            <View style={styles.cadastroContainer}>
                <VoltarLink />
                <View style={styles.cadastro}>
                    <Text style={styles.cadastroTitle}>Registre-se</Text>
                    <Formik
                        initialValues={{ Nome: "", email: "", password: "" }}
                        onSubmit={() => {}}
                    >
                        {(formikProps) => (
                            <View style={stylesFormik.inputContainer}>
                                <TextInput
                                    style={{
                                        ...stylesFormik.input,
                                        ...styles.input,
                                    }}
                                    placeholder="Nome"
                                    value={formikProps.values.email}
                                    onChangeText={formikProps.handleChange(
                                        "Nome"
                                    )}
                                    onBlur={formikProps.handleBlur("Nome")}
                                />
                                <TextInput
                                    style={{
                                        ...stylesFormik.input,
                                        ...styles.input,
                                    }}
                                    placeholder="E-mail"
                                    value={formikProps.values.email}
                                    onChangeText={formikProps.handleChange(
                                        "email"
                                    )}
                                    onBlur={formikProps.handleBlur("email")}
                                />
                                <View style={stylesFormik.passwordContainer}>
                                    <TextInput
                                        style={{
                                            ...stylesFormik.input,
                                            ...stylesFormik.passwordInput,
                                            ...styles.input,
                                        }}
                                        placeholder="Senha"
                                        value={formikProps.values.password}
                                        onChangeText={formikProps.handleChange(
                                            "password"
                                        )}
                                        onBlur={formikProps.handleBlur(
                                            "password"
                                        )}
                                        secureTextEntry={!showPass}
                                    />
                                    <EyeShowPasswd
                                        showPassword={showPassword}
                                        eyeIcon={eyeIcon}
                                        height={45}
                                    />
                                </View>
                                <View style={styles.esqueceuSenhaContainer}>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Text style={styles.esqueceuSenha}>
                                            Esqueceu a Senha
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={stylesFormik.submitContainer}>
                                    <TouchableOpacity
                                        style={stylesFormik.btnSubmit}
                                    >
                                        <Text style={stylesFormik.btnText}>
                                            Entre
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={googleIcon}
                                            style={stylesFormik.googleIcon}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={faceIcon}
                                            style={stylesFormik.faceIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                    <TouchableOpacity onPress={() => setEmailLoginOpen(true)}>
                        <Text style={styles.emailLogin}>Já é cadastrado?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
