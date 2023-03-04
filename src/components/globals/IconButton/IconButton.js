import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({
  icon = "star-outline",
  color = "#fff",
  size = 24,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "black" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
