import React, { useState } from "react";
import { View, Text, Image, Platform } from "react-native";
import Swiper from "react-native-deck-swiper";
import { connect } from 'react-redux'

import Header from "../../components/Header";
import Empty from "../../components/Empty";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import userPhoto from "../../assets/defaultUserImage.png";

function ProfCards(props) {
    const { favorProfs } = props

    // const [profList, setProfList] = useState([
    //     { id: 1, name: "Talita Cypriano", email: "talita@gmail.com" },
    //     { id: 2, name: "André Leme", email: "andre@gmail.com" },
    //     { id: 3, name: "Emílio Rodrigues", email: "emilio@gmail.com" },
    //     { id: 4, name: "Outro Professor", email: "contato@gmail.com" },
    //     { id: 5, name: "Outra Professora", email: "contato@gmail.com" },
    //     { id: 6, name: "Outra Professora", email: "contato@gmail.com" },
    // ]);

    const msg = "Oops...";
    const msg2 = "Nenhum professor encontrado";

    const [index, setIndex] = useState(0);

    const onSwipe = () => {
        setIndex(index + 1);
    };

    return (
        <>
            <Header />
            <View style={globalStyles.container}>
                {favorProfs.length || favorProfs.length !== index ? (
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
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.profName}>
                                            {card.name}
                                        </Text>
                                        <Text style={styles.profEmail}>
                                            {card.email}
                                        </Text>
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
                        // infinite={true}
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
        deleteProf: (id) => { dispatch({type: 'DELETE_PROF', id: id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfCards)
