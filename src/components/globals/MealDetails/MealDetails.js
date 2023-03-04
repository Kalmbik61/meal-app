import { View, Text } from "react-native";

import styles from "./MealDetails.styles";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.meal_info, style]}>
      <Text style={[[styles.meal_info__item, textStyle], textStyle]}>
        {duration}m
      </Text>
      <Text style={[styles.meal_info__item, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.meal_info__item, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;
