import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";

interface PillSelectorProps {
  items: string[]; 
  onSelectionChange?: (selectedItems: string[]) => void; 
}

const PillSelector: React.FC<PillSelectorProps> = ({ items, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    let updatedSelection: string[];
    if (selectedItems.includes(item)) {
      updatedSelection = selectedItems.filter((i) => i !== item);
    } else {
      updatedSelection = [...selectedItems, item];
    }
    setSelectedItems(updatedSelection);

    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selectedItems.includes(item);

    return (
      <TouchableOpacity
        style={[
          styles.pill,
          isSelected && styles.selectedPill, 
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
      numColumns={Math.floor(Dimensions.get("window").width / 110)} 
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
    backgroundColor: "#1D438A", 
  },
  pillText: {
    color: "#000",
    fontSize: 14,
  },
  selectedPillText: {
    color: "#FFF", 
  },
});

export default PillSelector;
