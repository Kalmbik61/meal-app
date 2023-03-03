import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

export default function MealDetailsScreen({ route, navigation }) {
  const meal = route.params.meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [navigation]);

  return (
    <View>
      <Text>MEAL DETAIL</Text>
    </View>
  );
}
