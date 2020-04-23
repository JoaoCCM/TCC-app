import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../globalStyle/globalStyles';
import styles from './styles';
import search from '../../assets/magGlass.png';

export default function Search() {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <LinearGradient
                    colors={["#6A82FB", "#FC5C7D"]}
                    start={[0.0, 0.5]}
                    end={[1.0, 0.5]}
                    locations={[0.0, 1.0]}
                    style={styles.gradientBar}
                >
                </LinearGradient>
                <TouchableOpacity style={styles.xIcon} onPress={goBack}>
                    <Feather name='x' size={30} />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Busque palavras chave"
                        underlineColorAndroid="#333"
                        accessibilityLabel="Search Input"
                        onChange={() => { }}
                    />
                </View>


                <View style={styles.searchBtn}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
