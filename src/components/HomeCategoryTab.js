import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const categories = [
  "Entertainment",
  "Business",
  "Politics",
  "Health",
  "Technology",
  "Sports",
];

class HomeCategoryTab extends Component {
  
  state = {};
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("GetNews", {
                category,
              })
            }
            style={{
              backgroundColor: "#02474C",
              padding: 12,
              borderRadius: 10,
              margin: 3,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default HomeCategoryTab;
