import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DetailVacancy } from "../components/DetailVacancy";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const VacanciesScreen = ({ navigation }) => {
  const header = navigation.getParam("header");
  const title = navigation.getParam("title");
  const description = navigation.getParam("description");

  return (
    <DetailVacancy header={header} description={description} title={title} />
  );
};

VacanciesScreen.navigationOptions = ({ navigation }) => {
  const header = navigation.getParam("header");
  const favorite = navigation.getParam("favorite");
  const icon = favorite ? 'ios-star' : 'ios-star-outline';
  return {
    headerTitle: `Вакансия ${header}`,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title="Toggle" name={icon} size={30} favorite={favorite} />
        </HeaderButtons>
      );
    },
  };
};
