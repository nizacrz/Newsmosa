import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../components/ScreenWrapper.js";
import ProfileImage from "../assets/images/profile_image.jpg";
import HomeCategoryCard from "../components/HomeCategoryCard.js";
import CardImage1 from "../assets/images/card_image1.png";
import CardImage2 from "../assets/images/card_image2.png";
import CardImage3 from "../assets/images/card_image3.png";
import HeadImage from "../assets/images/headImage.jpg";
import { ImageBackground } from "react-native";
import HomeCard from "../components/HomeCard.js";

import HomeCategoryTab from "../components/HomeCategoryTab.js";

export default function Home() {
  const [search, setSearch] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

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
            <Text style={styles.greetingHeaderText}>Good Morning</Text>
            <Text style={styles.greetingHeaderDate}>May 05, 2023</Text>
          </View>
          <Image style={styles.profile_image} source={ProfileImage} />
        </View>
        <View style={styles.search_bar_wrapper}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            style={styles.search_bar}
          />
          <Ionicons name="search" size={24} color="#02474C" />
        </View>
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
