import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import { useFonts } from "expo-font";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);


  const keyBoardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/BG.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-180}
          >
            <View style={styles.form}>
              <View style={styles.avatarContainer}>
                <View style={styles.addIcon}>
                  <Ionicons name="add" size={20} color="#FF6C00" />
                </View>
              </View>
              <Text style={styles.formTitle}>Регистрация</Text>
              <View
                style={[
                  styles.containerInput,
                  isLoginFocused && styles.containerFocused,
                ]}
              >
                <TextInput
                  placeholder="Логин"
                  style={styles.input}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsLoginFocused(true);
                  }}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                    setIsLoginFocused(false);
                  }}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View
                style={[
                  styles.containerInput,
                  isEmailFocused && styles.containerFocused,
                ]}
              >
                <TextInput
                  placeholder="Адрес электронной почты"
                  style={styles.input}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                    setIsEmailFocused(false);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View
                style={[
                  styles.containerInput,
                  isPasswordFocused && styles.containerFocused,
                ]}
              >
                <TextInput
                  placeholder="Пароль"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                    setIsPasswordFocused(false);
                  }}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.showPasswordText}>
                    {showPassword ? "Скрыть" : "Показать"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyBoardHide}
              >
                <Text style={styles.buttonText}>Зарегестрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={keyBoardHide}>
                <View>
                  <Text
                    style={styles.linkText}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Уже есть аккаунт? Войти
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    height: 549,
    width: 375,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
  },
  avatarContainer: {
    position: "absolute",
    top: -50,
    alignSelf: "center",
    marginBottom: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    fontFamily: "Roboto-Regular",
  },
  containerFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
    color: "#212121",
  },
  input: {
    flex: 1,
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    letterSpacing: 0.01,
    color: "#212121",
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
  showPasswordButton: {
    marginLeft: 10,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
  addIcon: {
    position: "absolute",
    left: 110,
    top: 90,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
  },
});
