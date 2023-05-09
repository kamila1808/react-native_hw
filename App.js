import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
        }}
        name="Posts"
        component={PostsScreen}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addIcon}>
              <Ionicons name="add" size={size} color="white" />
            </View>
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarActiveTintColor: "tomato",
        }}
        name="Profile"
        component={ProfileScreen}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};

export default function App() {
  const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

const styles = StyleSheet.create({
  addIcon: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
    marginTop: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});
