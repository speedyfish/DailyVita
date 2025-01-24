import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HealthScreen, { DraggableItem } from "./screens/HealthScreen";
import DietScreen from "./screens/DietScreen";
import QuestionsScreen from "./screens/QuestionsScreen.tsx";
import VitaminScreen from "./screens/VitaminScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import AllergiesScreen from "./screens/AllergiesScreen.tsx";

export type RootStackParamList = {
  Home: undefined;
  Health: undefined;
  Diet: { healthData: DraggableItem[] };

  Questions: {
    healthData: DraggableItem[];
    dietData: string[];
    allergiesData: string[];
  };
  Allergies: { healthData: DraggableItem[]; dietData: string[] };
  Vitamin: { healthData: DraggableItem[];
    dietData: string[];
    allergiesData: string[]; };
  AllergiesScreen: { healthData: DraggableItem[]; dietData: string[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Health"
              component={HealthScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Diet"
              component={DietScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Allergies"
              component={AllergiesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Questions"
              component={QuestionsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vitamin"
              component={VitaminScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;