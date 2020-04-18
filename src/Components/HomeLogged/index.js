import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Swipeable from "react-native-swipeable";
import { Feather } from "@expo/vector-icons";

import Empty from '../Empty';

import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";
import sendMail from "../../assets/Logar-Email.png";
import { connect } from 'react-redux'

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

function HomeLogged(props) {
    const [profList, setProfList] = useState([
        { id: 1, name: "Talita Cypriano", email: 'talita@gmail.com' },
        { id: 2, name: "André Leme", email: 'andre@gmail.com' },
        { id: 3, name: "Emílio Rodrigues", email: 'emilio@gmail.com' },
        { id: 4, name: "Outro Professor", email: 'contato@gmail.com' },
        { id: 5, name: "Outra Professora", email: 'contato@gmail.com' },
        { id: 6, name: "Outra Professora", email: 'contato@gmail.com' },
    ]);

    const msg = 'Nenhum professor salvo.';
    const msg2 = 'Comece agora!';

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
    const { favorProfs, user } = props
    console.log('Nome do aluno: ', user.nome)
    console.log('Professores Favoritados: ', favorProfs)

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
            <Empty msg={msg} msg2={msg2} />
        );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        favorProfs: state.favorProfs
    }
}

export default connect(mapStateToProps)(HomeLogged)
