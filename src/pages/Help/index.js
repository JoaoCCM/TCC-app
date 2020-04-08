import React from "react";
import { View, Text } from "react-native";
import Header from "../Header";
import globalStyles from "../../globalStyle/globalStyles";

export default function Help() {
    return (
        <View style={globalStyles.container}>
            <Header />
            <Text>HELP</Text>
        </View>
    );
}
