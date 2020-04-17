import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VoltarLink({ link }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.link}>{"<< Voltar"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link: {
        color: "#6A82FB",
        fontSize: 17,
        padding: 10,
    },
    doubleArrow: {
        width: 20,
        height: 20,
        backgroundColor: "red",
    },
});
