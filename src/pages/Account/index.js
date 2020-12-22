import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { loginContext } from "../../Context/loginContext";
import Header from "../../components/Header";

import { findUser } from "../../api/user";

import styles from "./styles";
import globalStyles from "../../globalStyle/globalStyles";
import defaultUser from "../../assets/defaultUserImage.png";
import addImg from "../../assets/addImg.png";

function Account(props) {
    const navigation = useNavigation();
    const [userData, setUserData] = useState();
    const { toggleLogin } = useContext(loginContext);

    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        getPermissionAsync();

        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const token = await AsyncStorage.getItem("userData");

        const { data } = await findUser(token.replace(/"/g, ""));

        setUserData(data[0]);
        setImageSrc(data[0].foto);
    };

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!"
                );
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

    return (
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
                <View style={styles.formContainer}>
                    <View style={styles.infoContainer}>
                        <View style={styles.info}>
                            <Text style={styles.text}>{email}</Text>
                            <Text style={styles.text}>{curso}</Text>
                            <Text style={styles.passwordLink}>
                                Trocar a Senha
                            </Text>
                            <View style={styles.edit}>
                                <TouchableOpacity>
                                    <Feather name="edit" size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity onPress={logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
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
