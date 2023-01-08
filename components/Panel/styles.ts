// Modules
import { StyleSheet } from "react-native";

// Styles
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  result: {
    width: "100%",
    textAlign: "right",
    color: colors.white,
    fontSize: 48,
  }
});

export default styles;