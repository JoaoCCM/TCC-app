import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import arrow from "../../assets/arrow.png";

import Login from "../Login";
import Header from "../Header";
import UserHome from "../UserHome";

export default function Home() {
    const [logado, setlogado] = useState(false);
    return (
        <View style={globalStyles.container}>
            <Header />
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Digite sua palavra chave:</Text>
                <View style={styles.arrowText}>
                    <Image source={arrow} style={styles.arrow} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Web"
                        underlineColorAndroid="#333"
                        accessibilityLabel="Search Input"
                        onChange={() => {}}
                    />
                </View>
            </View>
            {logado ? <UserHome /> : <Login />}
        </View>
    );
}
