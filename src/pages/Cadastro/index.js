import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";

import Header from "../Header";
// import doubleArrow from "../../assets/double-arrow.svg";
import VoltarLink from "../components/VoltarLink";

export default function Cadastro() {
    return (
        <View style={globalStyles.container}>
            <Header />
            <View style={styles.cadastroContainer}>
                <VoltarLink />
                <View style={styles.cadastro}>
                    <Text style={styles.searchText}>Cadastro</Text>
                </View>
            </View>
        </View>
    );
}
