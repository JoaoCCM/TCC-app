import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import logo from "../../assets/simpleLogo.png";
import magGlass from "../../assets/magGlass.png";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation();

    const toHome = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={styles.header}>
            <LinearGradient
                colors={["#6A82FB", "#FC5C7D"]}
                start={[0.0, 0.5]}
                end={[1.0, 0.5]}
                locations={[0.0, 1.0]}
                style={styles.gradientBar}
            ></LinearGradient>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={toHome}>
                    <Image source={logo} style={{ width: 80, height: 50 }} />
                </TouchableOpacity>
                <Image source={magGlass} style={styles.magGlassIcon} />
            </View>
        </View>
    );
}
