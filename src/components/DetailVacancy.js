import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
  Alert,
} from "react-native";

export const DetailVacancy = ({ header, description, title }) => {
  const respond = () => {
    Alert.alert("Поздравляем! Вы отправили отклик");
  };
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.text}> {`Вакансия: ${header}`}</Text>
        <Text style={styles.text}>{`Занятость : ${title}`}</Text>
        <Text style={styles.text}>
          {`Описание вакансии: ${"\n"} ${description.replace(
            /(\<(\/?[^>]+)>)/gi,
            ""
          )}`}
        </Text>

        <Button title="Откликнуться" onPress={respond} />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(176, 196, 222, 0.8)",
    margin: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 10,
  },
  text: {
    padding: 20,
  },
});
