// Components
import { Text } from "react-native";

// Styles
import styles from "./styles";

// Utils
import { useApp } from "../../contexts/AppContext";

export default function Panel() {
  const { app } = useApp();

  return (
    <Text style={styles.result}>
      {app.result}
    </Text>
  )
}