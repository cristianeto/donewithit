import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <Screen>
      <ListItem title="My title"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
