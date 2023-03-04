import { Text, View, Pressable, Image } from "react-native";
import styles from "./MealItem.styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../../../globals/MealDetails/MealDetails";
import { MEALS } from "../../../../fakeData/fakeData";

export default function MealItem({ mealId }) {
  const [imgError, setImgError] = useState(false);

  const navigation = useNavigation();

  const toMealDetail = () => {
    navigation.navigate("MealDetail", {
      mealId,
    });
  };

  const meal = MEALS.find((m) => m.id === mealId);

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
          <MealDetails
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
