import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function VoltarLink({ link }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity  style={styles.contentBack} onPress={() => navigation.goBack()}>
      <Feather
        name="chevrons-left"
        size={27}
        color="#6A82FB"
      />
      <Text style={styles.link}>{"Voltar"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentBack:{
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  link: {
    color: "#6A82FB",
    fontSize: 17,
  },
});
