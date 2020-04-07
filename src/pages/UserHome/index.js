import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import globalStyles from '../globalStyle/globalStyles';
import arrow from "../../assets/arrow.png";
import profilePic from "../../assets/defaultUserImage.png";
import sendMail from "../../assets/Logar-Email.png";

import Header from '../Header';

const data = [
    { id: 1, name: 'Talita Cypriano' },
    { id: 2, name: 'André Leme' },
    { id: 3, name: 'Emílio Rodrigues' },
    { id: 4, name: 'Outro Professor' },
    { id: 5, name: 'Outra Professora' },
    { id: 6, name: 'Outra Professora' },
]

export default function UserHome() {
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
                        onChange={() => { }}
                    />
                </View>
            </View>

            <FlatList
                style={styles.favList}
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={data => String(data.id)}
                renderItem={({ item: prof }) => (
                    <View style={styles.listContainer}>

                        <Image source={profilePic} style={styles.profilePic} />
                        <Text style={styles.profName}>{prof.name}</Text>
                        <TouchableOpacity onPress={() => console.log('mail composer')}>
                            <Image source={sendMail} style={styles.sendMail} />
                        </TouchableOpacity>

                    </View>
                )}

            />
        </View>
    )
}
