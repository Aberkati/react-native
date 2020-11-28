import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";
import { connect } from "react-redux";

const List = ({ item }) => {
  return (
    <View>
      <Text style={styles.text}>
        {item.length > 0 && (
          <Text>Il y a {item.length} éléments dans votre panier</Text>
        )}
      </Text>
      <FlatList
        data={item}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, {})(List);
