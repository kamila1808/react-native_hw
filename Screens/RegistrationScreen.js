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
  login: "",
  email: "",
  password: "",
};

export function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

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
    >
      <View style={{ ...styles.form }}>
        <View>
          <Text style={styles.formTitle}>Регистрация</Text>
          <TextInput
            placeholder="Логин"
            style={styles.input}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            value={state.login}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
          />
        </View>
        <View>
          <TextInput
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />
        </View>
        <View>
          <TextInput
            placeholder="Пароль"
            style={styles.input}
            secureTextEntry={true}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            value={state.password}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={keyBoardHide}
        >
          <Text style={styles.buttonText}>Зарегестрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
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
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
});
