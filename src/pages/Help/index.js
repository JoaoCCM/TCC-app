import React from "react";
import { View, Text, ScrollView } from "react-native";
import DropDownItem from "react-native-drop-down-item";

import globalStyles from "../../globalStyle/globalStyles";
import styles from "./styles";
import arrowUp from "../../assets/ArrowUp.png";
import arrowDown from "../../assets/ArrowDown.png";

import Header from "../../components/Header";

const qNa = [
    {
        title: "Qual o máximo de pessoas?",
        body: "No máximo de 3 pessoas na equipe para desenvolver o TCC",
    },
    { title: "Quais são as modalidades?", body: "2bdui2dbiubde" },
    { title: "Onde está o edital?", body: "2bdui2dbiubde" },
    { title: "Qual a função de um Orientador?", body: "2bdui2dbiubde" },
];

const getHelp = () => {
    return (
        <View style={styles.questionsContainer}>
            <ScrollView>
                {qNa
                    ? qNa.map((item, i) => {
                          return (
                              <DropDownItem
                                  style={styles.dropdown}
                                  key={i}
                                  contentVisible={false}
                                  invisibleImage={arrowDown}
                                  visibleImage={arrowUp}
                                  header={
                                      <View style={styles.headerContent}>
                                          <Text style={styles.headerText}>
                                              {item.title}
                                          </Text>
                                      </View>
                                  }
                              >
                                  <Text style={styles.body}>{item.body}</Text>
                              </DropDownItem>
                          );
                      })
                    : null}
            </ScrollView>
        </View>
    );
};

export default function Help() {
    return (
        <View style={globalStyles.container}>
            <Header />
            <View style={styles.initialInfo}>
                <Text style={styles.title}>Help Me!</Text>
                <Text style={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna.
                </Text>
            </View>
            {getHelp()}
        </View>
    );
}
