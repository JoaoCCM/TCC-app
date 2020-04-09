import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import Swipeable from 'react-native-swipeable';
import { Feather } from '@expo/vector-icons';


import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";
import sendMail from "../../assets/Logar-Email.png";



const btns = [
    <TouchableOpacity onPress={() => { }} style={styles.touch}><Feather name='trash-2' style={styles.deleteText} size={27} color='#fff' /></TouchableOpacity>
]



export default function UserHome() {
    const [profList, setProfList] = useState([
        { id: 1, name: "Talita Cypriano" },
        { id: 2, name: "André Leme" },
        { id: 3, name: "Emílio Rodrigues" },
        { id: 4, name: "Outro Professor" },
        { id: 5, name: "Outra Professora" },
        { id: 6, name: "Outra Professora" },
    ]);

    const deleteProf = id => {
        setProfList(currentList => {
            return currentList.filter(el => {
                return el.id !== id
            })
        })
    }

    return (
        <FlatList
            style={styles.favList}
            data={profList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(profList) => String(profList.id)}
            renderItem={({ item: prof }) => (
                <Swipeable leftButtons={btns} onLeftActionRelease={() => deleteProf(prof.id)}>
                    <View style={styles.listContainer}>
                        <Image source={profilePic} style={styles.profilePic} />
                        <Text style={styles.profName}>{prof.name}</Text>
                        <TouchableOpacity
                            onPress={() => console.log("mail composer")}
                        >
                            <Image source={sendMail} style={styles.sendMail} />
                        </TouchableOpacity>
                    </View>
                </Swipeable>
            )}
        />
    );
}
