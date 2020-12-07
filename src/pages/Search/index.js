import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getAreas } from "../../api/teacher";
import { Chip } from "react-native-paper";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import search from "../../assets/magGlass.png";

export default function Search() {
  const navigation = useNavigation();
  const [areas, setAreas] = useState([]);
  const [chosenAreas, setChosenAreas] = useState([]);

  useEffect(() => {
    getAreasApi();
  }, []);

  function goBack() {
    navigation.goBack();
  }

  const isSelected = (area) => chosenAreas.includes(area);

  function handleClick(area) {
    if (chosenAreas.includes(area)) return removeArea(area);

    return addArea(area);
  }

  function addArea(area) {
    const areas = [...chosenAreas, area];
    setChosenAreas(areas);
  }

  function removeArea(area) {
    const areas = chosenAreas.filter((item) => item !== area);
    setChosenAreas(areas);
  }

  function toCards() {
    navigation.navigate("ProfCards");
  }

  const getAreasApi = async () => {
    const { data } = await getAreas();
    setAreas(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <LinearGradient
          colors={["#6A82FB", "#FC5C7D"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={styles.gradientBar}
        ></LinearGradient>
        <TouchableOpacity style={styles.xIcon} onPress={goBack}>
          <Feather name="x" size={30} />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Busque palavras chave"
            underlineColorAndroid="#333"
            accessibilityLabel="Search Input"
            onChange={() => {}}
          />
        </View>
        <View>
          <View style={styles.chipView}>
            <View>
              <Text style={styles.chipTitle}>Sugestões:</Text>
            </View>
            <View>
              <ScrollView persistentScrollbar={true} style={{ flexGrow: 0 }}>
                <View style={styles.chipContainer}>
                  {areas.map((item, index) => (
                    <View
                      key={index}
                      style={
                        isSelected(item) ? styles.chipSelected : styles.chip
                      }
                    >
                      <TouchableOpacity
                        style={styles.chipContent}
                        onPress={() => handleClick(item)}
                      >
                        <Text style={styles.chipText}>{item}</Text>
                        {isSelected(item) && (
                          <Feather name="x" size={20} color={"white"} />
                        )}
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.searchBtn}>
            <TouchableOpacity style={styles.btn} onPress={toCards}>
              <Text style={styles.text}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
