import React, { useState } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from "../../components/Header";
import Empty from "../../components/Empty";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import userPhoto from "../../assets/defaultUserImage.png";
import heartRed from "../../assets/heartRed.png";
import normalHeart from "../../assets/normalHeart.png";

function ProfCards(props) {
    const { favorProfs } = props

    const navigation = useNavigation();
    const msg = "Oops...";
    const msg2 = "Nenhum professor encontrado";

    const [index, setIndex] = useState(0);
    const [fav, setFav] = useState(false);
    const [heart, setHeart] = useState('heart-outline');

    const onSwipe = () => {
        setIndex(index + 1);
    };

    function toProfInfo(card) {
        navigation.navigate('ProfInfo', { card });
    }

    function favorite() {
        setFav(!fav);
        fav ? setHeart('heart-outline') : setHeart('heart');
    }

    return (
        <>
            <Header />
            <View style={globalStyles.container}>
                {favorProfs.length && favorProfs.length !== index ? (
                    <Swiper
                        backgroundColor={"transparent"}
                        useViewOverflow={Platform.OS === "ios"}
                        cards={favorProfs}
                        cardIndex={index}
                        renderCard={(card) => (
                            card &&
                            <View style={styles.card}>
                                <Image
                                    source={userPhoto}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity onPress={favorite}>
                                    <MaterialCommunityIcons name={heart} size={22} style={styles.heart} />
                                </TouchableOpacity>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.profName}>
                                        {card.name}
                                    </Text>
                                    <Text style={styles.profEmail}>
                                        {card.email}
                                    </Text>
                                    <TouchableOpacity onPress={() => toProfInfo(card)}>
                                        <Text style={styles.profInfo}>Informações Acadêmicas</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        onSwiped={onSwipe}
                        stackSize={12}
                        stackScale={10}
                        stackSeparation={18}
                        disableTopSwipe
                        disableBottomSwipe
                        animateCardOpacity
                    />
                ) : (
                        <Empty msg={msg} msg2={msg2} />
                    )}
            </View>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        favorProfs: state.favorProfs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProf: (id) => { dispatch({ type: 'DELETE_PROF', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfCards)
