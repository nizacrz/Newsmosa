import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.js";
import SearchBar from "../components/SearchBar.js";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchNewsArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&apiKey=YOUR_API_KEY`
      );
      const json = await response.json();
      setArticles(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchText.length > 2) {
      searchNewsArticles();
    }
  }, [searchText]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <Article
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
              publishedAt={item.publishedAt}
              sourceName={item.source.name}
            />
          )}
          keyExtractor={(item) => item.title}
        />
        <StatusBar style="auto" />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
