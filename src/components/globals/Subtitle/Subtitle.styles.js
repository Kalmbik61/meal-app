import { StyleSheet, Platform } from "react-native";

const is_adnroid = Platform.OS === "android";

const styles = StyleSheet.create({
  subtitle_container: {
    marginHorizontal: 24,
    marginVertical: 6,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
