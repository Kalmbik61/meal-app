import { StyleSheet, Platform } from "react-native";

const is_adnroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default styles;
