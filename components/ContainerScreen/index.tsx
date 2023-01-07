// Components
import { SafeAreaView } from "react-native";

// Styles
import styles from "./styles";

type ContainerScreenProps = {
  children: JSX.Element | JSX.Element[];
}

export default function ContainerScreen({ children }: ContainerScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}