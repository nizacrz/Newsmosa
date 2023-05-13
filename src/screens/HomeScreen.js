import axios from "axios";
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
import News from "../components/Article.js";

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
import SearchBar from "../components/SearchBar.js";
import TrendingNews from "../components/TrendingNews.js";

var date = new Date().getDate();

export default function Home() {
  const [search, setSearch] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
 const [currentDate, setCurrentDate] = useState(new Date());

 const updateDate = () => {
   setCurrentDate(new Date());
 };

 useEffect(() => {
   const interval = setInterval(updateDate, 86400000); // 86400000 milliseconds = 1 day
   return () => clearInterval(interval);
 }, []);

  console.log("TabIndex", tabIndex);



  return (
    <ScreenWrapper>
    
      <LinearGradient
        colors={["white", "#176051"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <View style={styles.greeting}>
          <View style={styles.greetingHeader}>
            <Text style={styles.greetingHeaderText}>{greeting}</Text>
            <Text style={styles.greetingHeaderDate}>{currentDate.toDateString()}</Text>
          </View>
          <Image style={styles.profile_image} source={ProfileImage} />
        </View>

        <SearchBar/>
        <TrendingNews />
        <HomeCategoryTab labels={['Covid-19', 'TIP QC', 'SciTech', 'Sport', 'Government']} onPress={(index) => {
          console.log("hello");
          setTabIndex(index);
        }} color="#017e60" activeIndex={tabIndex} />

        <ScrollView>
          <HomeCard
            text="Apply for our scholarship grants"
            source={HeadImage}
            onPress={() => {}}
          />

          <HomeCategoryCard
            title="Holiday December, 25 2021. Click card for details."
            image={CardImage1}
            date={"May 6, 2023"}
            lengthDescription="10 minutes"
            onPress={() => {}}
          />
          <HomeCategoryCard
            title="Admission for School Year 2023-2024 is ongoing."
            image={CardImage2}
            date={"May 7, 2023"}
            lengthDescription="10 minutes"
            onPress={() => {}}
          />
          <HomeCategoryCard
            title="Come visit to T.I.P, Join our Campus Tour."
            image={CardImage3}
            date={"May 8, 2023"}
            lengthDescription="10 minutes"
            onPress={() => {}}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </LinearGradient>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
  },
  greetingHeader: {
    flex: 1,
  },

  greetingHeaderText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  greetingHeaderDate: {
    fontSize: 15,
  },

  profile_image: {
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 9999,
  },

  search_bar_wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 9999,
  },

  search_bar: { flex: 1 },
});
