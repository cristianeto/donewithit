import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { TextInput } from "react-native-gesture-handler";
import { Text } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import colors from "./app/config/colors";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
