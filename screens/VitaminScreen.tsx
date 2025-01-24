import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Vitamin">;

const VitaminScreen: React.FC<Props> = ({ route }) => {
  const { healthData, dietData, allergiesData } = route.params;

  const selectedOption = useSelector(
    (state: { selectedOption: { answers: string[] } }) =>
      state.selectedOption.answers
  );

  return (
    <View style={styles.container}>
      <Text style={styles.congratulationsText}>Congratulations!</Text>
      <Text style={styles.messageText}>You are healthy!</Text>
      <Text >{JSON.stringify(healthData, null, 2)}</Text>
      <Text >{JSON.stringify(dietData, null, 2)}</Text>
      <Text >{JSON.stringify(allergiesData, null, 2)}</Text>
      <Text >{JSON.stringify(selectedOption, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#CFFFF7",
  },
  congratulationsText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0D63B6", 
    marginBottom: 10,
  },
  messageText: {
    fontSize: 24,
    color: "#4CAF50",
  },
});

export default VitaminScreen;
