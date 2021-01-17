import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import api from "../../api/axios";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-material-dropdown";
import { loginContext } from "../../Context/loginContext";
import { signUp, signIn } from "../../api/user";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import stylesFormik from "../LoginForm/styles";
import globalStyles from "../../globalStyle/globalStyles";

import Header from "../../components/Header";
import VoltarLink from "../../components/VoltarLink";
import EyeShowPasswd from "../../components/EyeShowPasswd";

import CadastroDialog from "../../components/CadastroDialog";
import { favoritesContext } from "../../Context/favoritesContext"

export default function Cadastro() {
  const navigation = useNavigation();
  const { getFavorites } = useContext(favoritesContext);
  const { toggleLogin } = useContext(loginContext);
  const [formError, setFormError] = useState(false);
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

  const cadastro = async (body) => {
    try {
      const { status } = await signUp(body);

      if (status === 200) {
          return body;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  function closeDialog() {
    setEmailLoginOpen(!emailLoginOpen);
  }

  function showPassword() {
    setShowPassword(!showPass);
    showPass ? setEyeIcon("eye-off") : setEyeIcon("eye");
  }

  const handleSubmit = async ({ nome, email, senha, curso }) => {
    if (!email || !senha || !nome || !curso) {
      return setFormError(true);
    }
    const isLoggedBody = await cadastro({
      email: email.trim(),
      nome,
      senha,
      curso,
    });

    if (!isLoggedBody) return

    try {
      const { email, senha } = isLoggedBody;
      const {
        data: { token, nome },
      } = await signIn({ email, senha });

      await AsyncStorage.setItem("userData", JSON.stringify(token));
      await AsyncStorage.setItem("userNome", JSON.stringify(nome));

      api.defaults.headers.common["Authorization"] = `bearer ${token}`;

      navigation.pop()
      getFavorites();

      toggleLogin();

      return
    } catch (error) {
      console.error(error);
    }
  };

  const hasErrorClass = formError ? styles.errorInput : {};

  const inputClass = {
    ...styles.input,
    ...hasErrorClass,
  };

  return (
    <View style={globalStyles.container}>
      <Header />
      <CadastroDialog visible={emailLoginOpen} closeDialog={closeDialog} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.cadastroContainer}>
          <VoltarLink />
          <View style={styles.cadastro}>
            <Text style={styles.cadastroTitle}>Cadastre-se</Text>
            <Formik
              initialValues={{
                nome: "",
                email: "",
                senha: "",
                curso: "",
              }}
              onSubmit={handleSubmit}
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
                      ...inputClass,
                    }}
                    placeholder="Nome"
                    value={formikProps.values.nome}
                    onChangeText={formikProps.handleChange("nome")}
                    onBlur={formikProps.handleBlur("nome")}
                  />
                  <TextInput
                    style={{
                      ...stylesFormik.input,
                      ...inputClass,
                    }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange("email")}
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
                        ...inputClass,
                        ...styles.inputSenha,
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
                      height={45}
                    />
                  </View>
                  <View style={styles.cursos}>
                    <Dropdown
                      label="Curso"
                      data={cursos}
                      dropdownOffset={{
                        top: 10,
                        left: 0,
                      }}
                      fontSize={19}
                      style={styles.cursosDrop}
                      onChangeText={formikProps.handleChange("curso")}
                    />
                  </View>
                  {/* <View style={styles.esqueceuSenhaContainer}>
                    <TouchableOpacity onPress={() => {}}>
                      <Text style={styles.esqueceuSenha}>Esqueceu a Senha</Text>
                    </TouchableOpacity>
                  </View> */}
                  <View
                    style={{
                      ...stylesFormik.submitContainer,
                      ...styles.sendInput,
                    }}
                  >
                    {/* <View
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
                    </View> */}
                    <TouchableOpacity
                      style={stylesFormik.btnSubmit}
                      onPress={formikProps.handleSubmit}
                    >
                      <Text style={stylesFormik.btnText}>Entre</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
            <TouchableOpacity
              onPress={() => setEmailLoginOpen(true)}
              style={styles.emailLoginContainer}
            >
              <Text style={styles.emailLogin}>Já é cadastrado?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
