import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";

import styles from "./styles";

import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import EyeShowPasswd from "../../Components/EyeShowPasswd";

export default function LoginForm() {
    const [showPass, setShowPassword] = useState(false);
    const [eyeIcon, setEyeIcon] = useState("eye-off");

    function showPassword() {
        setShowPassword(!showPass);
        showPass ? setEyeIcon("eye-off") : setEyeIcon("eye");
    }
    return (
        <View style={styles.loginFormContainer}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={() => {}}
            >
                {(formikProps) => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            value={formikProps.values.email}
                            onChangeText={formikProps.handleChange("email")}
                            onBlur={formikProps.handleBlur("email")}
                        />
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    ...styles.passwordInput,
                                }}
                                placeholder="Senha"
                                value={formikProps.values.password}
                                onChangeText={formikProps.handleChange(
                                    "password"
                                )}
                                onBlur={formikProps.handleBlur("password")}
                                secureTextEntry={!showPass}
                            />
                            <EyeShowPasswd
                                showPassword={showPassword}
                                eyeIcon={eyeIcon}
                                height={60}
                            />
                        </View>
                        <View style={styles.submitContainer}>
                            <TouchableOpacity>
                                <Image
                                    source={faceIcon}
                                    style={styles.faceIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={googleIcon}
                                    style={styles.googleIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnSubmit}>
                                <Text style={styles.btnText}>Entre</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}
