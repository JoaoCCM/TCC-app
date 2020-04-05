import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/simpleLogo.png";
import styles from "./styles";

export default function Header() {
    const navigation = useNavigation();
    const toHome = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toHome}>
                <Image source={logo} style={{ width: 80, height: 50 }} />
            </TouchableOpacity>
        </View>
    );
}
