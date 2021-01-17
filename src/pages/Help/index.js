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
    { title: "Quais são as modalidades?", body: "Monografia; Relato de experiência" },
    { title: "Qual a função de um Orientador?", body: "O orientador deve guiar o aluno através dos documentos e processos necessários para o TCC acontecer." },
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
                    Algumas perguntas comuns pra quem está começando no processo do desenvolvimento do TCC.
                </Text>
            </View>
            {getHelp()}
        </View>
    );
}
