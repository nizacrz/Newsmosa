import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ScreenWrapper.js";

export default function Bookmark() {
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState([
    {
      id: "1",
      title: "Marcos on PH-China relations: 'Disengagement not an option'",
      source: "CNN Philippines",
      date: "19 hours ago",
      imageUrl:
        "http://www.cnnphilippines.com/.imaging/default/dam/cnn/2022/11/17/BBM-Xi-bilateral-meeting-APEC-Summit_CNNPH.jpg/jcr:content.jpg?width=750&height=450&crop:1:1,smart",
    },
    {
      id: "2",
      title: "PH to puruse talks with China on Malampaya gas fields—Marcos",
      source: "Manila Bulletin",
      date: "10 hours ago",
      imageUrl:
        "https://storage.googleapis.com/mb-mkt-neo-prod-1-uploads/BBM_CSIS_312d161df6/BBM_CSIS_312d161df6.jpg",
    },
    {
      id: "3",
      title: "Duration of PH airspace shutdown cut to 2 hours'",
      source: "INQUIRER.net",
      date: "7 hours ago",
      imageUrl:
        "https://newsinfo.inquirer.net/files/2023/02/435548-768x508.jpeg",
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: item.imageUrl }} />
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemSource}>{item.source}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#02474C" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Saved Stories</Text>
        </View>
        <FlatList
          data={bookmarks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>You have no bookmarks yet.</Text>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 8,
    marginRight: 16,
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#02474C",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  itemContent: {
    marginLeft: 12,
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemFooter: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemSource: {
    fontSize: 12,
    color: "#888",
    flex: 1,
    marginRight: 12,
  },
  itemDate: {
    fontSize: 10,
    color: "#888",
    marginTop: 3,
  },
  emptyText: {
    textAlign: "center",
    marginVertical: 32,
    fontSize: 16,
    color: "#666",
  },
});
