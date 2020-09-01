import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import Header from "../../components/Header";

import styles from "./styles";
import globalStyles from "../../globalStyle/globalStyles";
import defaultUser from "../../assets/defaultUserImage.png";
import addImg from "../../assets/addImg.png";

function Account(props) {
    const [imageSrc, setImageSrc] = useState();

    const { user } = props;

    useEffect(() => {
        getPermissionAsync();
    });

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
            if (!result.cancelled) {
                setImageSrc(result.uri);
            }
        } catch (E) {
            console.error(E);
        }
    };
    const source = imageSrc ? { uri: imageSrc } : defaultUser;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={globalStyles.container}
        >
            <Header />
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

                <Text style={styles.userName}>{user.name}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text style={styles.text}>{user.email}</Text>
                        <Text style={styles.text}>{user.course}</Text>
                        <Text style={styles.passwordLink}>Trocar a Senha</Text>
                        <View style={styles.edit}>
                            <TouchableOpacity>
                                <Feather name="edit" size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.logout}>
                    <TouchableOpacity>
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
