// src/screens/MyFormScreen.js
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import QuestionWithRadio from "../component/QuestionWithRadio";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const MyFormScreen = ({ navigation, route }) => {
  const { healthData, dietData, allergiesData } = route.params;
  const [loaded, error] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const selectedOption = useSelector((state) => state.selectedOption.answers);
  const questions = [
    {
      question: "Is your daily exposure to the sun limited?",
      options: ["Yes", "No"],
    },
    {
      question: "Do you currently smoke (tobacco or marijuana)?",
      options: ["Yes", "No"],
    },
    {
      question:
        "On average, how many alcoholic beverages do you have in a week?",
      options: ["0-1", "2-5", "5+"],
    },
  ];

  console.error("selectedOption", selectedOption);
  return (
    <View style={styles.container}>
      {questions.map((questionData, index) => (
        <QuestionWithRadio
          key={index}
          question={questionData.question}
          options={questionData.options}
        />
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Vitamin", {
            healthData,
            dietData,
            allergiesData,
          })
        }
      >
        <Text style={[{ fontFamily: "VarelaRound" }, styles.buttonText]}>
          Get my personalized vitamin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#CFFFF7",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
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

export default MyFormScreen;
