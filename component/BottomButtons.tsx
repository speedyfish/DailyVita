import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface BottomButtonProps {
  onBackPress: () => void;
  onNextPress: () => void;
  backText: string;
  nextText: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({
  onBackPress,
  onNextPress,
  backText,
  nextText
}) => {
  const [loaded] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

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
          {backText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FF7047" }]}
        onPress={onNextPress}
      >
        <Text style={[styles.buttonText, { fontFamily: "VarelaRound" }]}>
          {nextText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute", 
    bottom: 80, 
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", 
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
