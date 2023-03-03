import { Pressable, Text, View } from "react-native";
import styles from "./CategoryGreedTile.styles";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGreedTile({ title, color, onPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
