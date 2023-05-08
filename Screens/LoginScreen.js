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
} from "react-native";

import { useFonts } from "expo-font";

const initialState = {
  email: "",
  password: "",
};

export function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const keyBoardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-180}
    >
      <View style={styles.form}>
        <Text style={styles.formTitle}>Войти</Text>
        <View style={styles.container}>
        <TextInput
          placeholder="Адрес электронной почты"
          style={[styles.input, isShowKeyboard && styles.inputFocused]}
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          onBlur={() => {
            setIsShowKeyboard(false);
          }}
          value={state.email}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />
        </View>
        <View style={styles.container}>
          <TextInput
            placeholder="Пароль"
            style={styles.input}
            secureTextEntry={!showPassword}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            onBlur={() => {
              setIsShowKeyboard(false);
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
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={keyBoardHide}>
          <Text style={styles.linkText}>Нет аккаунта? Зарегестрироваться</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  input: {
    flex: 1,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#E8E8E8",
  //   backgroundColor: "#F6F6F6",
  //   height: 50,
  //   borderRadius: 8,
  //   marginHorizontal: 16,
  //   marginVertical: 10,
  //   padding: 16,
  //   fontFamily: "Roboto-Regular",
  //   // position: "relative",
  // },
  inputFocused: {
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#212121",
  },
  form: {
    height: 549,
    width: 375,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 500,
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
});