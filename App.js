import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";






export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/BG.png")}        >
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end'
  },
});
