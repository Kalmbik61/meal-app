import { Text, View, Pressable, Image } from "react-native";
import styles from "./MealItem.styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ meal }) {
  const [imgError, setImgError] = useState(false);

  const navigation = useNavigation();

  const toMealDetail = () => {
    navigation.navigate("MealDetail", {
      meal,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={toMealDetail}
      >
        <View style={styles.inner_container}>
          <View>
            <Image
              source={{ uri: meal.imageUrl }}
              style={[styles.image, imgError && styles.image_error]}
              onError={() => setImgError(true)}
            />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <View style={styles.meal_info}>
            <Text style={styles.meal_info__item}>{meal.duration}m</Text>
            <Text style={styles.meal_info__item}>
              {meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.meal_info__item}>
              {meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
