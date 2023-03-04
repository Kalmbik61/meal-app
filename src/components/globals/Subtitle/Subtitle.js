import { View, Text } from "react-native";

import styles from "./Subtitle.styles";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitle_container}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
