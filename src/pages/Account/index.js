import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Dropdown } from "react-native-material-dropdown";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { loginContext } from "../../Context/loginContext";
import { findUser } from "../../api/user";
import { Formik } from "formik";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import Header from "../../components/Header";
import EyeShowPasswd from "../../components/EyeShowPasswd";
import Loading from "../../components/Loading";

import defaultUser from "../../assets/defaultUserImage.png";
import addImg from "../../assets/addImg.png";

import styles from "./styles";
import stylesFormik from "../LoginForm/styles";
import stylesCadastro from "../Cadastro/styles";
import globalStyles from "../../globalStyle/globalStyles";

function Account() {
  const navigation = useNavigation();

  const [eyeIcon, setEyeIcon] = useState("eye-off");
  const [showPass, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState();
  const { toggleLogin } = useContext(loginContext);

  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    getPermissionAsync();

    getUserInfo();
  }, []);

  function showPassword() {
    setShowPassword(!showPass);
    showPass ? setEyeIcon("eye-off") : setEyeIcon("eye");
  }

  const getUserInfo = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem("userData");

    const { data } = await findUser(token.replace(/"/g, ""));
    setIsLoading(false);

    setUserData(data[0]);
    setImageSrc(data[0].foto);
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (!result.cancelled) setImageSrc(result.uri);
    } catch (error) {
      console.error(error);
    }
  };
  const source = imageSrc ? { uri: imageSrc } : defaultUser;

  const logout = () => {
    AsyncStorage.clear();
    toggleLogin();
    navigation.navigate("Home");
  };

  if (!userData) return null;

  const { nome, curso, email } = userData;

  const handleOpenForm = () => {
    setIsEditing(true);
  };

  const handleChangePassword = () => {
  };

  const handleEditInfo = () => {
    setIsEditing(false);
  };

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

  return isLoading ? (
    <Loading backgroundColor="rgba(0,0,0,0.1)" />
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyles.container}
    >
      <Header />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.userPhotoContainer}>
            <Image
              style={styles.userPhoto}
              source={source}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addImg}
            onPress={() => _pickImage()}
          >
            <Image source={addImg} />
          </TouchableOpacity>

          <Text style={styles.userName}>{nome}</Text>
        </View>
        {isEditing && (
          <View style={styles.formContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    curso: "",
                    password: "",
                  }}
                  onSubmit={() => {}}
                >
                  {(formikProps) => (
                    <View>
                      {false ? (
                        <View
                          style={{
                            ...stylesFormik.passwordContainer,
                            ...stylesCadastro.passwordContainer,
                          }}
                        >
                          <TextInput
                            style={{
                              ...stylesFormik.input,
                              ...stylesCadastro.input,
                              ...stylesCadastro.inputSenha,
                            }}
                            placeholder="Senha"
                            value={formikProps.values.password}
                            onChangeText={formikProps.handleChange("password")}
                            onBlur={formikProps.handleBlur("password")}
                            secureTextEntry={!showPass}
                          />
                          <EyeShowPasswd
                            showPassword={showPassword}
                            eyeIcon={eyeIcon}
                            height={45}
                          />
                        </View>
                      ) : (
                        <>
                          <TextInput
                            style={{ ...stylesFormik.input, ...styles.input }}
                            placeholder="Nome"
                            value={formikProps.values.nome}
                            onChangeText={formikProps.handleChange("name")}
                            onBlur={formikProps.handleBlur("name")}
                          />
                          <TextInput
                            style={{ ...stylesFormik.input, ...styles.input }}
                            placeholder="E-mail"
                            value={formikProps.values.email}
                            onChangeText={formikProps.handleChange("email")}
                            onBlur={formikProps.handleBlur("email")}
                          />
                          <Dropdown
                            label="Curso"
                            data={cursos}
                            dropdownOffset={{
                              top: 10,
                              left: 0,
                            }}
                            fontSize={19}
                            value={formikProps.values.curso}
                            onChangeText={formikProps.handleChange("curso")}
                          />
                        </>
                      )}

                      <View style={styles.formBtnContainer}>
                        <TouchableOpacity onPress={() => setIsEditing(false)}>
                          <Text style={styles.logoutText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEditInfo}>
                          <View style={styles.btnSubmit}>
                            <Text style={styles.btnText}>Salvar</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </Formik>
              </View>
            </View>
          </View>
        )}
        {!isEditing && (
          <View style={styles.formContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{curso}</Text>
                <TouchableOpacity onPress={() => handleChangePassword()}>
                  <Text style={styles.passwordLink}>Trocar a Senha</Text>
                </TouchableOpacity>
                <View style={styles.edit}>
                  <TouchableOpacity onPress={handleOpenForm}>
                    <Feather name="edit" size={22} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={styles.logout}>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
  };
};

export default connect(mapStateToProps)(Account);
