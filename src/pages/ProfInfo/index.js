import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import globalStyles from '../../globalStyle/globalStyles';
import styles from './styles';
import photo from '../../assets/defaultUserImage.png';

import Header from '../../components/Header';
import VoltarLink from '../../components/VoltarLink';

export default function ProfInfo() {

    const navigation = useNavigation();
    const route = useRoute();
    const prof = route.params.card;

    return (
        <>
            <Header />
            <View style={globalStyles.container}>
                <VoltarLink />
                <View style={styles.title}>
                    <Text style={styles.titleText}>Salvo</Text>
                </View>
                <View style={styles.align}>
                    <View style={styles.infoContainer}>
                        <View style={styles.prof}>
                            <Image source={photo} style={styles.profImage} />
                            <Text style={styles.profNome}>{prof.name}</Text>
                        </View>

                        <View style={styles.info}>
                            <TouchableOpacity>
                                <Text style={styles.textinfo}>Linha de pesquisa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textinfo}>Projetos de pesquisa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textinfo}>Produções</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textinfo}>Banca</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}
