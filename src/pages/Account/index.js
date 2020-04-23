import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";

import Header from "../../components/Header";

import styles from "./styles";
import globalStyles from "../../globalStyle/globalStyles";
import defaultUser from "../../assets/defaultUserImage.png";

function Account(props) {
    const { user } = props;
    return (
        <View style={globalStyles.container}>
            <Header />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.userPhoto}
                    source={defaultUser}
                    resizeMode="contain"
                />
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
            </View>
            <View style={styles.logout}>
                <TouchableOpacity>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.userInfo,
    };
};

export default connect(mapStateToProps)(Account);
