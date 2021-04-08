import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell want you dont need!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={"login"}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title={"register"}
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
