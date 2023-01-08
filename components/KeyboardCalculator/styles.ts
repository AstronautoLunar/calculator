// Modules
import { StyleSheet } from "react-native";

// Utils
import Color from "../../utils/Color";
import ScreenApp from "../../utils/ScreenApp";

// Styles
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 1,
  },
  keyPress: {
    width: "24.4%",
    height: "20%",
    margin: 1
  },
  keyArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: 40,
    color: colors.white,
  },
  rowEndArea: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    paddingTop: 1,
    paddingBottom: 2,
    paddingLeft: 1,
    paddingRight: 1,
  },
  zeroKeyArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 1
  },
  zeroKeyPress: {
    width: "24.9%",
    paddingRight: 1,
  },
  keyEqualArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  keyEqualPress: {
    flex: 1,
    paddingLeft: 1,
  },
});

export default styles;