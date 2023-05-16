import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { ImageBackground } from "react-native";
import CardImage1 from "../../assets/images/card_image1.png";
import CardImage2 from "../../assets/images/card_image2.png";
import CardImage3 from "../../assets/images/card_image3.png";
import HeadImage from "../../assets/images/headImage.jpg";
import ProfileImage from "../../assets/images/profile_image.jpg";
import HomeCard from "../components/HomeCard.js";
import HomeCategoryCard from "../components/HomeCategoryCard.js";
import HomeCategoryTab from "../components/HomeCategoryTab.js";
import ScreenWrapper from "../components/ScreenWrapper.js";
import TrendingNews from "../components/TrendingNews.js";
import NewsScreen from "../screens/NewsScreen";

var date = new Date().getDate();

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(updateDate, 86400000); // 86400000 milliseconds = 1 day
    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={["lightgray", "#176051"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.greeting}>
        <View style={styles.greetingHeader}>
          <Text style={styles.greetingHeaderText}>{greeting}</Text>
          <Text style={styles.greetingHeaderDate}>
            {currentDate.toDateString()}
          </Text>
        </View>
      </View>
      <HomeCard />
      <ScrollView>
        <HomeCategoryTab />
        <NewsScreen />
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  greeting: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },

  greetingHeader: {
    flex: 1,
    marginBottom: 12,
  },

  greetingHeaderText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  greetingHeaderDate: {
    fontSize: 15,
    marginBottom: 5,
  },
});
