import MasonryList from '@react-native-seoul/masonry-list';
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import react, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Article from "../components/Article";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);

   const searchArticles = () =>{
       axios.get('https://newsapi.org/v2/top-headlines?country=ph&apiKey=c23bd479af3c45eeb352216f66a50e73',{
           params:{
               q: searchText,   
           }
       })
           .then( (response) =>{
               // handle success
               setArticles(response.data.articles);
           })
           .catch(function (error) {
               // handle error
               console.log(error);
           })
           .then(function () {
               // always executed
           });
   } 
   useEffect(() => {
    searchArticles();
    },[]);
    return (
        <LinearGradient
        colors={["lightgray", "#176051"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
        <View style = {{backgroundColor: "white"}}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
              </View>
                     <MasonryList
                     
                    numColumns={2}
                     data={articles}
                    renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                    />}
                keyExtractor={(item) => item.title}
            />

        </SafeAreaView>
        </LinearGradient>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})