// Components
import { Text } from "react-native";

// Styles
import styles from "./styles";

type PanelProps = {
  children?: string;
}

export default function Panel({ children }: PanelProps) {
  return (
    <Text style={styles.result}>
      {children}
    </Text>
  )
}