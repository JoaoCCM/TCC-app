import React from "react";
import { Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyle/globalStyles";

export default function VoltarLink({ link }) {
    return (
        <>
            <Text style={styles.link}>{"<< Voltar"}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    link: {
        color: "#6A82FB",
        fontSize: 17,
        padding: 20,
    },
    doubleArrow: {
        width: 20,
        height: 20,
        backgroundColor: "red",
    },
});
