import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const BottomButton = ({ onBackPress, onNextPress }) => {
  const [loaded, error] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });
  return (
    <View style={styles.buttonContainer}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.button} onPress={onBackPress}>
        <Text
          style={[
            styles.buttonText,
            { color: "#FF7047", fontFamily: "VarelaRound" },
          ]}
        >
          Back
        </Text>
      </TouchableOpacity>

      {/* Navigate to Health Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FF7047" }]}
        onPress={onNextPress}
      >
        <Text style={[styles.buttonText, { fontFamily: "VarelaRound" }]}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute", // Position the buttons at the bottom
    bottom: 80, // Set distance from the bottom of the screen
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", // Space buttons on opposite sides
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default BottomButton;
