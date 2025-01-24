import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOption } from "../redux/selectedOptionsSlice";
import { useFonts } from "expo-font";

interface QuestionWithRadioProps {
  question: string; 
  options: string[];
}

const QuestionWithRadio: React.FC<QuestionWithRadioProps> = ({
  question,
  options,
}) => {
  const [loaded, error] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: any) => state.selectedOption.answers[question] 
  );

  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption({ question, answer: option })); 
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.question, { fontFamily: "VarelaRound" }]}>
        {question}
      </Text>

      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => handleOptionSelect(option)}
          >
            <View style={styles.radioButton}>
              <View
                style={[
                  styles.radioCircle,
                  selectedOption === option && styles.selectedRadioCircle,
                ]}
              />
            </View>
            <Text style={[styles.optionText, { fontFamily: "VarelaRound" }]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "transparent",
  },
  selectedRadioCircle: {
    backgroundColor: "#FF7047", // Highlight the selected option
  },
  optionText: {
    fontSize: 16,
  },
});

export default QuestionWithRadio;
