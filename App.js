import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/Home";
import Client from "./src/components/Client";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}
        options={{
          title: "Loja do Iglisson Ruan",
          headerStyle: {
            backgroundColor: "#11538C",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: "center"
        }}
        />
        <Stack.Screen name="Client" component={Client}
        options={{
          title: "Loja do Iglisson Ruan",
          headerStyle: {
            backgroundColor: "#11538C",
          },
          headerTintColor: "#F0F1F2",
          headerTitleAlign: "center"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}