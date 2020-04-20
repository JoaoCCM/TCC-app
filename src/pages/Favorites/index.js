import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    PanResponder,
    Animated,
} from "react-native";
import Swipeable from "react-native-swipeable";
import { connect } from "react-redux";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import profilePic from "../../assets/defaultUserImage.png";

import Header from "../../components/Header";

const btns = [
    <TouchableOpacity onPress={() => {}} style={styles.touch}>
        <Feather
            name="trash-2"
            style={styles.deleteText}
            size={27}
            color="#fff"
        />
    </TouchableOpacity>,
];

class Favorites extends React.Component {
    state = {
        dragging: false,
        draggingIdx: -1,
        // data: [
        //     { id: 1, name: "Talita Cypriano" },
        //     { id: 2, name: "André Leme" },
        //     { id: 3, name: "Emílio Rodrigues" },
        //     { id: 4, name: "Outro Professor" },
        //     { id: 5, name: "Outra Professora" },
        //     { id: 6, name: "Outra Professora" },
        // ]
    };

    point = new Animated.ValueXY();
    scrollOffset = 0;
    flatListTopOffset = 0;
    rowHeight = 0;
    currentIdx = -1;

    constructor(props) {
        super(props);

        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                console.log(gestureState.y0);
                this.currentIdx = this.yToIndex(gestureState.y0);
                this.setState({ dragging: true, draggingIdx: this.currentIdx });
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },
            onPanResponderMove: (evt, gestureState) => {
                Animated.event([{ y: this.point.y }])({
                    y: gestureState.moveY,
                });
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                this.reset();
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
                this.reset();
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    yToIndex = (y) => {
        Math.floor(
            (this.scrollOffset + y - this.flatListTopOffset) / this.rowHeight
        );
    };

    reset = () => {
        this.setState({ dragging: false });
    };

    deleteProf = (id) => {
        this.props.deleteProf(id);
        // setProfList((currentList) => {
        //     return currentList.filter((el) => {
        //         return el.id !== id;
        //     });
        // });
    };
    render() {
        const { favorProfs } = this.props;

        const { dragging, draggingIdx } = this.state;

        const renderItem = ({ item: prof }) => (
            <Swipeable
                leftButtons={btns}
                onLeftActionRelease={() => deleteProf(prof.id)}
            >
                <View
                    style={styles.listContainer}
                    {...this._panResponder.panHandlers}
                    onLayout={(e) => {
                        this.rowHeight = e.nativeEvent.layout.height;
                    }}
                >
                    <MaterialCommunityIcons name="drag" size={30} />
                    <Image source={profilePic} style={styles.profilePic} />
                    <Text style={styles.profName}>{prof.name}</Text>
                </View>
            </Swipeable>
        );

        return (
            <>
                <Header />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Salvos</Text>
                </View>

                {dragging && (
                    <Animated.View
                        style={{
                            position: "absolute",
                            zIndex: 2,
                            backgroundColor: "red",
                            width: "100%",
                            top: this.point.getLayout().top,
                        }}
                    >
                        {renderItem({ prof: draggingIdx })}
                    </Animated.View>
                )}

                {favorProfs.length ? (
                    <FlatList
                        scrollEnabled={!dragging}
                        onScroll={(e) => {
                            this.scrollOffset = e.nativeEvent.contentOffset.y;
                        }}
                        onLayout={(e) => {
                            this.flatListTopOffset = e.nativeEvent.layout.y;
                        }}
                        style={styles.favList}
                        data={favorProfs}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(favorProfs) => String(favorProfs.id)}
                        renderItem={renderItem}
                    />
                ) : (
                    <View style={styles.msgContainer}>
                        <Text style={styles.msg}>
                            Você não possui nenhum professor salvo ainda!
                        </Text>
                    </View>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        favorProfs: state.favorProfs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProf: (id) => {
            dispatch({ type: "DELETE_PROF", id: id });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
