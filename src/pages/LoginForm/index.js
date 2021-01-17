import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import api from "../../api/axios";

import { signIn } from "../../api/user";

import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";

import EyeShowPasswd from "../../components/EyeShowPasswd";

import styles from "./styles";

const LoginForm = ({ toggleLogin, closeDialog, favorite }) => {
  const [formError, setFormError] = useState(false);
  const [showPass, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("eye-off");

  function showPassword() {
    setShowPassword(!showPass);
    showPass ? setEyeIcon("eye-off") : setEyeIcon("eye");
  }

  const signin = async (email, senha) => {
    try {
      const body = { email, senha };
      const {
        data: { token, nome },
      } = await signIn(body);

      await AsyncStorage.setItem("userData", JSON.stringify(token));
      await AsyncStorage.setItem("userNome", JSON.stringify(nome));

      api.defaults.headers.common["Authorization"] = `bearer ${token}`;

      closeDialog();
      toggleLogin();
      favorite();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async ({ email, senha }) => {
    if (!email || !senha) {
      return setFormError(true);
    }
    await signin(email.trim(), senha, toggleLogin, closeDialog);
  };

  const hasErrorClass = formError ? styles.errorInput : {};

  const inputClass = {
    ...styles.input,
    ...hasErrorClass,
  };

  return (
    <View style={styles.loginFormContainer}>
      <Formik initialValues={{ email: "", senha: "" }} onSubmit={handleSubmit}>
        {(formikProps) => (
          <View style={styles.inputContainer}>
            <TextInput
              name="email"
              style={inputClass}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formikProps.values.email}
              onChangeText={formikProps.handleChange("email")}
              onBlur={formikProps.handleBlur("email")}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                name="senha"
                style={{
                  ...inputClass,
                  ...styles.passwordInput,
                }}
                placeholder="Senha"
                value={formikProps.values.senha}
                onChangeText={formikProps.handleChange("senha")}
                onBlur={formikProps.handleBlur("senha")}
                secureTextEntry={!showPass}
              />
              <EyeShowPasswd
                showPassword={showPassword}
                eyeIcon={eyeIcon}
                height={60}
              />
            </View>
            <View style={styles.submitContainer}>
              {/* <View style={styles.loginSocialMedia}>
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
                            </View> */}
              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={formikProps.handleSubmit}
              >
                <Text style={styles.btnText}>Entre</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
