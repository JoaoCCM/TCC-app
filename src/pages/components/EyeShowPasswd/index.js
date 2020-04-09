import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function EyeShowPasswd({ showPassword, eyeIcon, height }) {
    return (
        <View style={{ ...styles.eyeContainer, height: height }}>
            <TouchableOpacity onPress={showPassword}>
                <Feather
                    name={eyeIcon}
                    size={17}
                    style={styles.eye}
                    color="#6A82FB"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    eyeContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
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
