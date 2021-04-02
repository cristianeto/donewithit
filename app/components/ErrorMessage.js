import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

ErrorMessage.propTypes = {
  error: PropTypes.string,
  visible: PropTypes.boolean,
};
export default ErrorMessage;
