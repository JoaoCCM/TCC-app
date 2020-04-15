import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import userPhoto from '../../assets/defaultUserImage.png'

export default class Card extends React.Component {

    state = {
        data: [
            { id: 1, name: "Talita Cypriano", email: 'talita@gmail.com' },
            { id: 2, name: "André Leme", email: 'andre@gmail.com' },
            { id: 3, name: "Emílio Rodrigues", email: 'emilio@gmail.com' },
            { id: 4, name: "Outro Professor", email: 'contato@gmail.com' },
            { id: 5, name: "Outra Professora", email: 'contato@gmail.com' },
            { id: 6, name: "Outra Professora", email: 'contato@gmail.com' },
        ]
    }


    render() {
        const { data } = this.state;
        return (
            <View style={styles.card}>
                <Image source={userPhoto} style={styles.cardImage} />
                <Text>{data.name}</Text>
                <Text>{data.email}</Text>
            </View>
        )
    }
}



