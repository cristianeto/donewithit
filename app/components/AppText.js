import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'

function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}



const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    })
  }
})

export default AppText;