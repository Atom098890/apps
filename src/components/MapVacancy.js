import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const MapVacancy = ({ vacancyСard, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onOpen(vacancyСard)}>
      <View style={styles.vacancy}>
        <View style={styles.textWrap}>
          <Text style={styles.text}>{vacancyСard.header}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vacancy: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrap: {
    backgroundColor: "rgba(176, 196, 222, 0.8)",
    width: 250,
    height: 100,
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    color: "#808080",
    textAlign: "center",
    paddingTop: 20,
  },
});
