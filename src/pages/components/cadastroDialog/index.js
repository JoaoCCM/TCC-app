import React from "react";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import {
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import LoginForm from "../../LoginForm";

export default function CadastroDialog(props) {
    const { visible = false, closeDialog } = props;

    return (
        <Dialog
            visible={visible}
            onTouchOutside={() => {
                closeDialog();
            }}
        >
            <DialogContent>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <View style={styles.modalContent}>
                        <Feather
                            name="x-circle"
                            size={27}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose,
                            }}
                            onPress={() => closeDialog()}
                        />
                        <LoginForm />
                    </View> */}
                    <View style={styles.modalContent}>
                        <Feather
                            name="x-circle"
                            size={27}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose,
                            }}
                            onPress={() => closeDialog()}
                        />
                        <LoginForm />
                    </View>
                </TouchableWithoutFeedback>
            </DialogContent>
        </Dialog>
    );
}
