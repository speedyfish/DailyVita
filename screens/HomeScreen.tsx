import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "VarelaRound", fontSize: 28 }}>
        Welcome to DailyVita
      </Text>
      <View style={{ paddingVertical: 12 }}>
        <Text style={{ fontFamily: "VarelaRound", fontSize: 16 }}>
          Hello, we are here to make your life healthier and happier
        </Text>
      </View>
      <Image
        source={require("../assets/images/dragonball.png")}
        style={styles.image}
      />
      <Text style={{ fontFamily: "VarelaRound", fontSize: 16 }}>
        We will help you with your vitamin needs
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Health")
        }
      >
        <Text style={[{ fontFamily: "VarelaRound" }, styles.buttonText]}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#CFFFF7",
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "left",
  },
  image: {
    width: 280,
    height: 280,
    alignSelf: "center",
    marginBottom: 20,
  },
  button: {
    width: "90%",
    backgroundColor: "#FF7047",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    position: "absolute",
    bottom: 80,
    left: "10%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
