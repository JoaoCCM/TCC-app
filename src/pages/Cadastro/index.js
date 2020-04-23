import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Formik } from "formik";
import { Dropdown } from "react-native-material-dropdown";

import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";
import styles from "./styles";
import stylesFormik from "../LoginForm/styles";
import globalStyles from "../../globalStyle/globalStyles";

import Header from "../../components/Header";
import VoltarLink from "../../components/VoltarLink";
import EyeShowPasswd from "../../components/EyeShowPasswd";

import CadastroDialog from "../../components/CadastroDialog";

export default function Cadastro() {
    const [showPass, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState("eye-off");
    const [emailLoginOpen, setEmailLoginOpen] = useState(false);

    let cursos = [
        {
            value: "ADS",
        },
        {
            value: "Mecatrônica",
        },
        {
            value: "Matemática",
        },
        {
            value: "Engenharia",
        },
    ];

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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.cadastroContainer}>
                    <VoltarLink />
                    <View style={styles.cadastro}>
                        <Text style={styles.cadastroTitle}>Cadastre-se</Text>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                            }}
                            onSubmit={() => {}}
                        >
                            {(formikProps) => (
                                <View
                                    style={{
                                        ...stylesFormik.inputContainer,
                                        ...styles.inputContainer,
                                    }}
                                >
                                    <TextInput
                                        style={{
                                            ...stylesFormik.input,
                                            ...styles.input,
                                        }}
                                        placeholder="Nome"
                                        value={formikProps.values.nome}
                                        onChangeText={formikProps.handleChange(
                                            "name"
                                        )}
                                        onBlur={formikProps.handleBlur("name")}
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
                                    <View
                                        style={{
                                            ...stylesFormik.passwordContainer,
                                            ...styles.passwordContainer,
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                ...stylesFormik.input,
                                                ...styles.input,
                                                ...styles.inputSenha,
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
                                    <View style={styles.cursos}>
                                        <Dropdown
                                            label="Curso"
                                            data={cursos}
                                            dropdownOffset={{
                                                top: 32,
                                                left: 0,
                                            }}
                                            fontSize={19}
                                            style={styles.cursosDrop}
                                        />
                                    </View>
                                    <View style={styles.esqueceuSenhaContainer}>
                                        <TouchableOpacity onPress={() => {}}>
                                            <Text style={styles.esqueceuSenha}>
                                                Esqueceu a Senha
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            ...stylesFormik.submitContainer,
                                            ...styles.sendInput,
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <TouchableOpacity>
                                                <Image
                                                    source={faceIcon}
                                                    style={
                                                        stylesFormik.faceIcon
                                                    }
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image
                                                    source={googleIcon}
                                                    style={
                                                        stylesFormik.googleIcon
                                                    }
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity
                                            style={stylesFormik.btnSubmit}
                                        >
                                            <Text style={stylesFormik.btnText}>
                                                Entre
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </Formik>
                        <TouchableOpacity
                            onPress={() => setEmailLoginOpen(true)}
                            style={styles.emailLoginContainer}
                        >
                            <Text style={styles.emailLogin}>
                                Já é cadastrado?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
