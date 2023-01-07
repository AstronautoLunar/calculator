// Modules
import { StyleSheet } from "react-native";

// Utils
import Color from "../../utils/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.setOpacityInHex("emphasis", "70"),
  }
});

export default styles;