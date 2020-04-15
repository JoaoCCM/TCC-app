import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Swipeable from "react-native-swipeable";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";
import sendMail from "../../assets/Logar-Email.png";

const btns = [
    <TouchableOpacity onPress={() => { }} style={styles.touch}>
        <Feather
            name="trash-2"
            style={styles.deleteText}
            size={27}
            color="#fff"
        />
    </TouchableOpacity>,
];

export default function HomeLogged() {
    const [profList, setProfList] = useState([
        { id: 1, name: "Talita Cypriano", email: 'talita@gmail.com' },
        { id: 2, name: "André Leme", email: 'andre@gmail.com' },
        { id: 3, name: "Emílio Rodrigues", email: 'emilio@gmail.com' },
        { id: 4, name: "Outro Professor", email: 'contato@gmail.com' },
        { id: 5, name: "Outra Professora", email: 'contato@gmail.com' },
        { id: 6, name: "Outra Professora", email: 'contato@gmail.com' },
    ]);

    const navigation = useNavigation();

    const deleteProf = (id) => {
        setProfList((currentList) => {
            return currentList.filter((el) => {
                return el.id !== id;
            });
        });
    };

    const toFavorites = () => {
        navigation.navigate('Favorites', { profList: profList })
    }
    return profList.length ? (
        <FlatList
            style={styles.favList}
            data={profList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(profList) => String(profList.id)}
            renderItem={({ item: prof }) => (
                <Swipeable
                    leftButtons={btns}
                    onLeftActionRelease={() => deleteProf(prof.id)}
                >
                    <TouchableOpacity onPress={() => toFavorites}>
                        <View style={styles.listContainer}>
                            <Image source={profilePic} style={styles.profilePic} />
                            <Text style={styles.profName}>{prof.name}</Text>
                            <TouchableOpacity
                                onPress={() => console.log("mail composer")}
                            >
                                <Image source={sendMail} style={styles.sendMail} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Swipeable>
            )}
        />
    ) : (
            <View style={styles.msgContainer}>
                <Text style={styles.msg}>
                    Você não possui nenhum professor salvo ainda!
            </Text>
            </View>
        );
}
