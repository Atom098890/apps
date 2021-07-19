import React from "react";
import { View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";


export const AppHeaderIcon = (props) => {
  return (
    <View>
    <Ionicons {...props} onPress={()=>console.log(props.favorite)}/>
    </View>
  );

  // <View>
  //   <Ionicons name={icon} size={32} color="green" onPress={()=>console.log(props.favorite)}/>
  //   </View>
};
