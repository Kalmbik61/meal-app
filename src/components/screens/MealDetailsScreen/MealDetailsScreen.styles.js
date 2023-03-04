import { StyleSheet, Platform } from "react-native";

const is_adnroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: 350,
  },

  image_error: {
    backgroundColor: "grey",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detail_text: {
    color: "#fff",
  },
  step_container: {
    marginVertical: 4,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#e2b497",
    padding: 4,
  },
  step: {
    color: "#351401",
  },
});

export default styles;
