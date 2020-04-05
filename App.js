import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Routes from './src/routes/routes';

//loading fonts
const getFonts = () => {
  return Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf")
  });
};


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Routes />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }


}

