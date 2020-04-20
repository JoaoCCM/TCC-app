import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers/rootReducer";

import Routes from "./src/routes/routes";

//loading fonts
const getFonts = () => {
    return Font.loadAsync({
        "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    });
};

const store = createStore(rootReducer);

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}
