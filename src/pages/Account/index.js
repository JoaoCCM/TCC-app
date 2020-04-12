import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import globalStyles from "../../globalStyle/globalStyles";

import defaultUser from "../../assets/defaultUserImage.png";

export default function Account() {
    return (
        <View style={globalStyles.container}>
            <Header />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.userPhoto}
                    source={defaultUser}
                    resizeMode="contain"
                />
                <Text style={styles.userName}>Nome da Criatura</Text>
            </View>
        </View>
    );
}
