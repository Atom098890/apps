import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { MapVacancy } from "../src/components/MapVacancy";

export const Data = ({ onOpen }) => {
  const [vacancies, SetVacancies] = useState([]);
  useEffect(() => {
    async function fetchZp() {
      const response = await fetch("http://api.zp.ru/v1/vacancies");
      const { vacancies } = await response.json();
      const DATA = { data: [] };
      vacancies.forEach((item) => {
        DATA.data.push({
          header: item.header,
          id: item.id,
          title: item?.working_type?.title,
          favorite: item.favorite,
          date: item?.add_date,
          description: item.description,
        });
      });

      SetVacancies(DATA.data);
    }
    fetchZp();
  }, []);

  return (
    <View>
      <FlatList
        data={vacancies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MapVacancy vacancyСard={item} onOpen={onOpen} />
        )}
      />
    </View>
  );
};
