import React, { useState } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  );
};
const TweetsDetails = () => {
  return (
    <Screen>
      <Text>Tweets Details</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
      <Stack.Screen name="Tweets" component={Tweets} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
