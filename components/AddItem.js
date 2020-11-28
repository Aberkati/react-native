import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addItem } from "../actions/item";
import { MaterialIcons } from "@expo/vector-icons";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => {
    setText(textValue);
  };
  const clearAll = () => {
    setText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Ajouter un élément"
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholderTextColor="darkslateblue"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
        }}
        onPressOut={clearAll}
      >
        <Text style={styles.btnText}>
          {" "}
          <MaterialIcons name="add" size={24} color="black" />
          Ajouter un produit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#a2bad8",
    padding: 9,
    margin: 5,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
export default connect(null, { addItem })(AddItem);
