import React, { useContext } from "react";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { View, Keyboard, TouchableWithoutFeedback, Text } from "react-native";
import { loginContext } from "../../Context/loginContext";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import LoginForm from "../../pages/LoginForm";

export default function CadastroDialog(props) {
    const { toggleLogin } = useContext(loginContext);

    const { visible = false, closeDialog } = props;

    return (
        <Dialog
            width="90%"
            visible={visible}
            onTouchOutside={() => {
                closeDialog();
            }}
        >
            <DialogContent>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#333333",
                                    fontSize: 22,
                                    fontFamily: "montserrat-regular",
                                    fontWeight: "bold",
                                }}
                            >
                                Login
                            </Text>
                            <Feather
                                name="x-circle"
                                size={27}
                                style={{
                                    ...styles.modalToggle,
                                    ...styles.modalClose,
                                }}
                                onPress={() => closeDialog()}
                            />
                        </View>
                        <LoginForm
                            toggleLogin={toggleLogin}
                            closeDialog={closeDialog}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </DialogContent>
        </Dialog>
    );
}
