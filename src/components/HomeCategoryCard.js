import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

import Kermit from '../../assets/images/profile_image.jpg';


const HomeCategoryCard = ({image, title, date, lengthDescription, onPress, isBookmarked=false}) => {
  return (
    <TouchableRipple style={styles.touchable_ripple} onPress={onPress} borderless>
      <LinearGradient
        colors={["#017E60", "#176051"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card_container}
      >
        <Image source={image ?? Kermit} resizeMode="cover" style={styles.card_container_image} />
        <View style={styles.card_container_info}>
          <View style={[styles.card_container_subtitle_wrapper, {flex: 1}]}>
            <Text
              style={styles.card_container_title}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Ionicons
              name={isBookmarked ? `bookmark` : `bookmark-outline`}
              size={20}
              color="#FFFFFF"
            />
          </View>
          <View style={styles.card_container_subtitle_wrapper}>
            <Text
              style={[styles.card_container_subtitle, { marginRight: "auto" }]}
            >
              {`${lengthDescription} read`}
            </Text>
            <Text style={styles.card_container_subtitle}>{date}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  touchable_ripple: {
    backgroundColor: "#208974",
    marginVertical: 7,
    borderRadius: 25,
    width: '100%',
  },
  card_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContents: "center",
  },
  card_container_info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginRight: 8,
  },
  card_container_image: {
    width: 110,
    height: 110,
  },
  card_container_title: {
    flex: 1,
    fontSize: 10,
    color: "white",
  },

  card_container_subtitle: {
    fontSize: 8,
    color: "white",
  },

  card_container_subtitle_wrapper: {
    display: "flex",
    flexDirection: "row",
  },
});

export default HomeCategoryCard