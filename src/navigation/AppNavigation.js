import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MainScreen } from "../screens/MainScreen";
import { VacanciesScreen } from "../screens/VacanciesScreen";

const Navigation = createStackNavigator(
  {
    Main: MainScreen,
    Vacancy: {
      screen: VacanciesScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor : '#FFD700'
        }
    }
  }
);

export const AppNavigation = createAppContainer(Navigation);
