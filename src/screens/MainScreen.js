import React from "react";
import { View, StyleSheet } from "react-native";

import { Data } from "../data";

export const MainScreen = ({ navigation }) => {
  const goTo = (vacancyСard) => {
    navigation.navigate("Vacancy", {
      header: vacancyСard.header,
      id: vacancyСard.id,
      title: vacancyСard.title,
      date: vacancyСard.add_date,
      description: vacancyСard.description,
      favorite: vacancyСard.favorite,
    });
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <Data onOpen={goTo} />
      </View>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Зарплата.ру",
};
//это комментарий для проверки force
//теперь я стою на ветке Dorosh
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
