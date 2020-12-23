
import React from "react";
import {
    View,
    ActivityIndicator,
} from "react-native";

import styles from "./styles";

export default function Loading({backgroundColor = 'white'}) {
  return (
    <View style={{...styles.loadingContainer, backgroundColor}}>
      <ActivityIndicator
        visible={true}
        size={"large"}
        color="#6A82FB"
      />
    </View>
  );
}
