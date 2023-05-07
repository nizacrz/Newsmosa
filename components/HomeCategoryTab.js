import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

import { TouchableRipple } from "react-native-paper";

const HomeCategoryTab = ({ labels, onPress, color, activeIndex }) => {
  // 1. Receives list of labels
  // 2. Represents them using another component within this component
  // 3. Clicking on an item returns the index
  // 4. There is an active initial index
  return (
    <ScrollView
      style={styles.category_list}
      contentContainerStyle={styles.category_list_container_style}

      horizontal
    >
      {labels.map((label, index) => {
        console.log(label, index, activeIndex);
        console.log(activeIndex === index);
        return (
        <HomeCategoryChip
        key={index}
          label={label}
          onPress={() => {
            console.log(index);
            onPress(index);
          }}
          isActive={activeIndex === index}
          color={color}
        />
      )})}
    </ScrollView>
  );
};

const HomeCategoryChip = ({ label, onPress, isActive = false, color }) => {
  return (
    <TouchableRipple
      onPress={onPress}
      style={[
        styles.touchable_ripple,
        {
          borderColor: color ?? "red",
          backgroundColor: isActive && (color ?? "red"),
        },
      ]}
    >
        <Text style={styles.category_list_text}>{label}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  category_list: {
    paddingHorizontal: 5,
  },
  category_list_text: {
    fontSize: 10,
    textAlign: "center",
  },
  category_list_container_style: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    textShadowColor: "gray",
    textShadowRadius: 7,
  },
  touchable_ripple: {
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 9999,
    padding: 5,
  },
});

export default HomeCategoryTab;
