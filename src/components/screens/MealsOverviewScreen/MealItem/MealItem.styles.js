import { StyleSheet, Platform } from "react-native";

const is_adnroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: is_adnroid ? "hidden" : "visible",
  },
  inner_container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: { opacity: 0.5 },
  image: {
    width: "100%",
    height: 200,
  },

  image_error: {
    backgroundColor: "grey",
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
});

export default styles;
