import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import styles from "./styles";
import arrow from "../../assets/arrow.png";
import Login from "../Login";

import Header from "../../pages/Header";

export default function Home() {
    return (
        <View style={styles.loginContainer}>
            <Header />
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Digite sua palavra chave:</Text>
                <View style={styles.arrowText}>
                    <Image source={arrow} style={styles.arrow} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Web"
                        underlineColorAndroid="#333"
                        accessibilityLabel="search input"
                        onChange={() => {}}
                    />
                </View>
            </View>
            {/*Ai aqui a gente coloca um if se ele nao estiver logado roda esse componente, e se ele estiver roda outro*/}
            <Login />
        </View>
    );
}
