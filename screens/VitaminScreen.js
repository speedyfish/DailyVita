import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const VitaminScreen = ({ route }) => {
  const { healthData, dietData, allergiesData } = route.params;
  const selectedOption = useSelector((state) => state.selectedOption.answers);
  return (
    <View style={styles.container}>
      <Text style={styles.congratulationsText}>Congratulations!</Text>
      <Text style={styles.messageText}>You are healthy!</Text>
      <Text style={styles.text}>{JSON.stringify(healthData, null, 2)}</Text>
      <Text style={styles.text}>{JSON.stringify(dietData, null, 2)}</Text>
      <Text style={styles.text}>{JSON.stringify(allergiesData, null, 2)}</Text>
      <Text style={styles.text}>{JSON.stringify(selectedOption, null, 2)}</Text>
      {console.error(route.params)}
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
    color: "#0D63B6", // Blue color
    marginBottom: 10,
  },
  messageText: {
    fontSize: 24,
    color: "#4CAF50", // Green color for health
  },
});

export default VitaminScreen;
