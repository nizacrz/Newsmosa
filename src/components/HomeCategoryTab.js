import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeCategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Covid-19");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderTab = (tab) => {
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        key={tab}
        onPress={() => handleTabPress(tab)}
        style={[styles.tab, isActive && styles.activeTab]}
      >
        <Text style={styles.tabText}>{tab}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {["Covid-19", "SciTech", "Sport", "Government"].map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 20,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#176051",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeCategoryTabs;
