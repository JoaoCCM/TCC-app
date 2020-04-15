import React, { useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import Header from '../../components/Header';

import globalStyles from '../../globalStyle/globalStyles';
import styles from './styles';
import userPhoto from '../../assets/defaultUserImage.png'


const Card = () => {
    return (
        <View style={styles.card}>
            <Image source={userPhoto} style={styles.cardImage} />
        </View>
    )
}

export default function ProfCards() {
    const [profList, setProfList] = useState([
        { id: 1, name: "Talita Cypriano", email: 'talita@gmail.com' },
        { id: 2, name: "André Leme", email: 'andre@gmail.com' },
        { id: 3, name: "Emílio Rodrigues", email: 'emilio@gmail.com' },
        { id: 4, name: "Outro Professor", email: 'contato@gmail.com' },
        { id: 5, name: "Outra Professora", email: 'contato@gmail.com' },
        { id: 6, name: "Outra Professora", email: 'contato@gmail.com' },
    ]);

    const [index, setIndex] = useState(0);

    const onSwipe = () => {
        if (profList.length === 0) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <>
            <Header />
            <View style={globalStyles.container}>
                <Swiper
                    backgroundColor={'transparent'}
                    useViewOverflow={Platform.OS === 'ios'}
                    cards={profList}
                    cardIndex={index}
                    renderCard={() => <Card />}
                    onSwiped={onSwipe}
                    stackSize={12}
                    stackScale={10}
                    stackSeparation={18}
                    disableTopSwipe
                    disableBottomSwipe
                    animateCardOpacity
                // infinite
                />
            </View>
        </>
    )
}

