// Components
import { Text, ScrollView, View } from "react-native";

// Styles
import styles from "./styles";

// Utils
import { useApp } from "../../contexts/AppContext";

export default function Panel() {
  const { app } = useApp();

  return (
    <ScrollView 
      style={styles.scrollContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.result}>
          {app.result}
        </Text>
      </View>
    </ScrollView>
  )
}