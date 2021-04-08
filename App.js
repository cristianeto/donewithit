import React, { useState } from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

import AuthNavigator from "./app/navigation/AuthNavigator";
import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};
const TweetsDetails = ({ route }) => {
  //useRoute
  return (
    <Screen>
      <Text>Tweets Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );
};

const AccountNavigator = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
