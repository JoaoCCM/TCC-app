import React, { Component } from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import Swipeable from "react-native-swipeable";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";

import Header from "../../components/Header";

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



class Favorites extends Component {
    // navigation = useNavigation();

    changeOrder = (newState) => {
        this.props.changeOrder(newState.data);
    };

    deleteProf = (id) => {
        this.props.deleteProf(id);
    };

    // toCards = () => {
    //     navigation.navigate('Card')
    // }

    renderItem = ({ item, index, drag, isActive }) => {
        return (
            <Swipeable
                leftButtons={btns}
                onLeftActionRelease={() => deleteProf(item.id)}
            >
                <TouchableOpacity
                    style={{
                        ...styles.itemContainer,
                    }}
                >
                    <View
                        style={{
                            ...styles.listContainer,
                            elevation: isActive ? 3 : 1,
                        }}
                    >
                        <TouchableOpacity

                            onPressIn={drag}
                        >
                            <MaterialCommunityIcons name="drag" size={40} />
                        </TouchableOpacity>
                        <Image source={profilePic} style={styles.profilePic} />
                        <Text style={styles.profName}>{item.name}</Text>
                        <TouchableOpacity onPress={() => this.deleteProf(item.id)} style={styles.trash} >
                            <Feather name='trash-2' color='red' size={20} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        );
    };

    render() {
        const { favorProfs } = this.props;
        return (
            <View style={globalStyles.container}>
                <Header />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Salvos</Text>
                </View>
                {favorProfs ? (
                    <View style={styles.draggableContainer}>
                        <DraggableFlatList
                            data={favorProfs}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) =>
                                `draggable-item-${item.id}`
                            }
                            onDragEnd={({ data }) => this.changeOrder({ data })}
                        />
                    </View>
                ) : (
                        <View style={styles.msgContainer}>
                            <Text style={styles.msg}>
                                Você não possui nenhum professor salvo ainda!
                        </Text>
                        </View>
                    )}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        favorProfs: state.user.favorProfs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProf: (id) => {
            dispatch({ type: "DELETE_PROF", id: id });
        },
        changeOrder: (newState) => {
            dispatch({ type: "CHANGE_ORDER", newState: newState });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
