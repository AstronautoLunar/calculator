// Modules
import { StyleSheet } from "react-native";

// Utils
import Color from "../../utils/Color";

// Styles
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  keyPress: {
    width: "25%",
    height: "20%",
  },
  keyArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: 24,
    color: colors.white,
  },
  rowEndArea: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
  },
  zeroKeyArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  zeroKeyPress: {
    width: "25%",
  },
  keyEqualArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  keyEqualPress: {
    flex: 1,
  },
});

export default styles;