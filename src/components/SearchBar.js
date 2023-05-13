import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SearchBar = (props) => {
  return(
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput
            
            placeholder="Search"
            style={styles.input}
            value={props.searchText}
            onChangeText={(text)=>props.setSearchText(text)}
            onSubmitEditing={props.onSubmit}
        />
    </View>
)
}

export default SearchBar;





const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 0,
    color: "#000",
  },
});
