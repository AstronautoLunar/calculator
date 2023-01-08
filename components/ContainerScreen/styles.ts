// Module
import { StyleSheet } from "react-native";

// Utils
import ScreenApp from "../../utils/ScreenApp";

// Styles
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: ScreenApp.getHeightStatusBar() ?? 24,
    backgroundColor: colors.black,
  }
});

export default styles;