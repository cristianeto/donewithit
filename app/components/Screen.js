import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return (
    // !este estilo esta definido en el curso pero no me valia a mi
    <SafeAreaView style={[styles.screen, style]}>
      {/* <SafeAreaView style={[styles.screen]}> //*Este codigo si me valia */}
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default Screen;
