import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import PillSelector from "../component/PillSelector";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import BottomButton from "../component/BottomButtons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Health">;

// Define the structure of a draggable item
export interface DraggableItem {
  key: string;
  label: string;
  height: number;
}

const HealthScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [data, setData] = useState<DraggableItem[]>([]);

  const [loaded] = useFonts({
    VarelaRound: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  const categories: string[] = [
    "Sleep",
    "Immunity",
    "Stress",
    "Join Support",
    "Digestion",
    "Mood",
    "Energy",
    "Hair, Skin, Nails",
    "Weight Loss",
    "Fitness",
    "Special Medical Condition",
  ];

  useEffect(() => {
    const newData = selectedItems.map((label) => ({
      key: label,
      label: label,
      height: 60, 
    }));
    setData(newData);
  }, [selectedItems]);

  const renderItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<DraggableItem>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "#FF7047" : "#DEFFED" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#1D438A",
                borderRadius: 30,
                paddingHorizontal: 16,
                paddingVertical: 6,
              }}
            >
              <Text style={{ color: "white" }}>{item.label}</Text>
            </View>
            <MaterialIcons name="menu" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          { fontFamily: "VarelaRound", fontSize: 20 },
          styles.leftAlignedText,
        ]}
      >
        Select the top health concerns. {"\n"}(upto 5)
      </Text>
      <View style={styles.pillSelectorContainer}>
        <PillSelector
          items={categories}
          onSelectionChange={setSelectedItems}
        />
      </View>
      <Text
        style={[
          { fontFamily: "VarelaRound", fontSize: 20 },
          styles.leftAlignedText,
        ]}
      >
        Prioritize
      </Text>

      <View style={styles.draggableContainer}>
        <DraggableFlatList
          data={data}
          onDragEnd={({ data }) => setData(data)}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
        />
      </View>

      <BottomButton
        onBackPress={() => navigation.goBack()}
        onNextPress={() => navigation.navigate("Diet", { healthData: data })}
        backText="Go Back"
        nextText="Proceed"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#CFFFF7",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pillSelectorContainer: {
    maxHeight: 220,
    width: "100%",
    marginBottom: 20,
  },
  draggableContainer: {
    maxHeight: 200,
    width: "100%",
  },
  rowItem: {
    height: 40,
    width: "100%",
    marginBottom: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#130066",
  },
  text: {
    color: "whtie",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  leftAlignedText: {
    textAlign: "left",
    width: "100%",
  },
});

export default HealthScreen;