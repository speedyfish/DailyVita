import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import BottomButton from "../component/BottomButtons";

const items = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Meat" },
  { id: 3, name: "Weat" },
  { id: 4, name: "Nasacort" },
  { id: 5, name: "Nasalide" },
  { id: 6, name: "Nasaonex" },
];

export default function SuggestionInput({ navigation, route }) {
  const { healthData, dietData } = route.params;
  const [loaded, error] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const [text, setText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const filterSuggestions = (inputText) => {
    if (inputText) {
      const filteredSuggestions = items.filter((item) =>
        item.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleItemPress = (item) => {
    if (!selectedItems.includes(item.name)) {
      setSelectedItems((prevSelected) => [...prevSelected, item.name]);
    }
    setText("");
    setSuggestions([]);
  };

  const removeItem = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((selectedItem) => selectedItem !== item)
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          { fontFamily: "VarelaRound", fontSize: 20, paddingBottom: 10 },
          styles.leftAlignedText,
        ]}
      >
        Write any specific allergies or sensitivity towards specific things.
        (optional)
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(inputText) => {
            setText(inputText);
            filterSuggestions(inputText);
          }}
          placeholder="Type here..."
        />
        <View style={styles.selectedItemsContainer}>
          {selectedItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.selectedItem}
              onPress={() => removeItem(item)}
            >
              <Text style={styles.selectedItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handleItemPress(item)}
            >
              <Text style={styles.suggestionText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <BottomButton
        onBackPress={() => navigation.goBack()}
        onNextPress={() =>
          navigation.navigate("Questions", {
            healthData: healthData,
            dietData: dietData,
            allergiesData: selectedItems,
          })
        }
        backText="Go Back"
        nextText="Proceed"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#CFFFF7",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexWrap: "wrap",
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 0,
    padding: 0,
    textAlign: "left",
  },
  selectedItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectedItem: {
    backgroundColor: "#1D438A",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
  },
  selectedItemText: {
    color: "white",
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
  },
  suggestionText: {
    fontSize: 16,
  },
});
