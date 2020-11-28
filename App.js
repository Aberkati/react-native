import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./store";

const App = ({ item }) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title="Courses à faire" />
        <AddItem />
        <List />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 5,
    padding: 3,
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
});

export default App;
