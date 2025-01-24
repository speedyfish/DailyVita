import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useFonts } from "expo-font";
import BottomButton from "../component/BottomButtons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Diet">;

const DietScreen: React.FC<Props> = ({ navigation, route }) => {
  const { healthData } = route.params;
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);

  const [loaded] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  const dietOptions: string[] = [
    "None",
    "Vegan",
    "Vegetarian",
    "Pescterian",
    "Strict Paleo",
    "Ketogenic",
    "Plant based",
  ];

  const handleCheckboxChange = (diet: string) => {
    setSelectedDiets((prev) =>
      prev.includes(diet)
        ? prev.filter((item) => item !== diet)
        : [...prev, diet]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First row - Text */}
      <View style={styles.row}>
        <Text style={{ fontFamily: "VarelaRound", fontSize: 22 }}>
          Select the diets you follow:
        </Text>
      </View>

      {/* Second row - Multi checkbox */}
      <View style={styles.row}>
        {dietOptions.map((diet) => (
          <CheckBox
            key={diet}
            title={diet}
            checked={selectedDiets.includes(diet)}
            onPress={() => handleCheckboxChange(diet)}
            containerStyle={styles.checkboxContainer}
            textStyle={{ fontFamily: "VarelaRound" }}
          />
        ))}
      </View>

      <BottomButton
        onBackPress={() => navigation.goBack()}
        onNextPress={() =>
          navigation.navigate("Allergies", {
            healthData: healthData,
            dietData: selectedDiets,
          })
        }
        backText="Go Back"
        nextText="Proceed"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#CFFFF7",
  },
  row: {
    marginBottom: 20,
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 16,
    fontFamily: "VarelaRound",
  },
});

export default DietScreen;