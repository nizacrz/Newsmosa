import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View } from "react-native";
import config from "../../config/config";
import Article from "../components/Article";


const NewsScreen = () => {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=ph&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9',{
            params:{
                category: "General",
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
        getNews();
    },[]);

    

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />
                    }
                keyExtractor = {(item) => item.title}
                
            />
            

        </SafeAreaView>
    )
}

export default NewsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width -30,
    }
})