import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function EyeShowPasswd({ showPassword, eyeIcon, height }) {
    return (
        <View style={{ ...styles.eyeContainer, height: height }}>
            <TouchableOpacity onPress={showPassword}>
                <Feather
                    name={eyeIcon}
                    size={20}
                    style={styles.eye}
                    color="#6A82FB"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    eyeContainer: {
        borderBottomWidth: 1.3,
        borderBottomColor: "rgba(51, 51, 51, 0.80)",
        height: 50,
        justifyContent: "flex-end",
        paddingBottom: 10,
        paddingRight: 5,
    },
    eye: {
        alignItems: "center",
        marginLeft: 0,
        marginTop: 0,
    },
});
