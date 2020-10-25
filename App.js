import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppButton from './app/components/AppButton';

export default function App() {
  const handlePress = () => {
    console.log('pressing button');
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <AppButton title={'Login'} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
