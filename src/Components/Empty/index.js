import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';

import globalStyles from '../../globalStyle/globalStyles';
import styles from './styles';
import ghost from '../../assets/notFound.png';


export default function Empty({ msg, msg2 }) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.content}>

                <Image source={ghost} style={styles.ghost} />


                <View style={styles.textContent}>
                    <Text style={styles.OopsText}>{msg}</Text>
                    <Text style={styles.text}>{msg2}</Text>
                </View>
            </View>

            <View style={styles.seachContainer}>
                <TouchableOpacity style={styles.searchBtn}>
                    <Text style={styles.searchText}>Faça uma busca!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
