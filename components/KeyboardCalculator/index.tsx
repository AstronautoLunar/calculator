// Components
import { 
  View, 
  TouchableOpacity, 
  Text
} from "react-native";

// Styles
import styles from "./styles";

// Utils of Components
import renderColorKeys from "./utils/renderColorKeys";

export const structure = {
  "add": "+",
  "subtract": "-",
  "multiply": "x",
  "division": "/",
  "seven": "7",
  "eight": "8",
  "nine": "9",
  "percentage": "%",
  "four": "4",
  "five": "5",
  "six": "6",
  "point": ".",
  "one": "1",
  "two": "2",
  "three": "3",
  "delete": "c",
};

export default function KeyboardCalculator() {
  return (
    <View style={styles.container}>
      {Object.entries(structure).map(([type, label]) => (
        <TouchableOpacity style={styles.keyPress} key={type}>
          <View
            
            style={[
              styles.keyArea,
              {
                
                backgroundColor: renderColorKeys(type as keyof typeof structure)
              }
            ]}
          >
            <Text 
              style={styles.keyText}
            >
              {label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.rowEndArea}>
        <TouchableOpacity style={styles.zeroKeyPress}>
          <View 
            style={[
              styles.zeroKeyArea,
              {
                backgroundColor: renderColorKeys("zero")
              }
            ]} 
          >
            <Text 
              style={styles.keyText}
            >
              0
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyEqualPress}>
          <View 
            style={[
              styles.keyEqualArea,
              {
                backgroundColor: renderColorKeys("equal")
              }
            ]}
          >
            <Text 
              style={styles.keyText}
            >
              =
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}