import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";

const PillSelector = ({ items, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (item) => {
    let updatedSelection;
    if (selectedItems.includes(item)) {
      updatedSelection = selectedItems.filter((i) => i !== item);
    } else {
      updatedSelection = [...selectedItems, item];
    }
    setSelectedItems(updatedSelection);

    // Notify the parent component of the change
    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item);

    return (
      <TouchableOpacity
        style={[
          styles.pill,
          isSelected && styles.selectedPill, // Apply selected style
        ]}
        onPress={() => toggleSelection(item)}
      >
        <Text style={[styles.pillText, isSelected && styles.selectedPillText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}-${index}`}
      numColumns={Math.floor(Dimensions.get("window").width / 110)} // Adjust numColumns based on screen width
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 10,
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "1D438A",
  },
  selectedPill: {
    backgroundColor: "#1D438A", // Selected pill color
  },
  pillText: {
    color: "#000",
    fontSize: 14,
  },
  selectedPillText: {
    color: "#FFF", // Selected pill text color
  },
});

export default PillSelector;
