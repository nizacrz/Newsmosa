import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import HeadImage from "../../assets/images/headImage.jpg";

const HomeCard = ({ text, source, onPress, isBookmarked = false }) => {
  return (
    <TouchableRipple
      style={styles.touchable_ripple}
      onPress={onPress}
      borderless
    >
      <ImageBackground
        imageStyle={styles.header_image}
        source={source ?? HeadImage}
        style={styles.header}
      >
        <Ionicons
          name={isBookmarked ? `bookmark` : `bookmark-outline`}
          size={20}
          color="#FFFFFF"
          style={{
            alignSelf: "flex-end",
            padding: 8,
            textShadowColor: "black",
            textShadowRadius: 5,
          }}
        />

        <View>
          <Text style={styles.header_title}>{text}</Text>
        </View>
      </ImageBackground>
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 300,
    marginVertical: 8,
    display: "flex",
    flexDirection: "column",
  },
  header_image: {
    borderRadius: 10,
  },
  header_title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#ffffff",
    justifyContent: "flex-end",
    padding: 20,
    marginTop: 200,
    textShadowColor: "black",
    textShadowRadius: 5,
  },
});
export default HomeCard;