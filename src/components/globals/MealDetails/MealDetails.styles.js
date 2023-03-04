import { StyleSheet, Platform } from "react-native";

const is_adnroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {},

  meal_info: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  meal_info__item: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});

export default styles;
