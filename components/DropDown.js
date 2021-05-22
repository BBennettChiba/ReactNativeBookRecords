import React, {useState} from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import sorts from '../utils/sorts'

export default function DropDown({books, setBooks}) {
  const [selectedValue, setSelectedValue] = useState("title");

  
  function sort(type) {
    books = books.sort(sorts[type]);
    setBooks(books);
  }


  return (
    <View style={styles.pickerView}>
      <Text>Sort</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          sort(itemValue);
        }}
      >
        <Picker.Item label="By Author" value="author" />
        <Picker.Item label="By Title" value="title" />
        <Picker.Item label="By Recently Added" value="recent" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 30,
    width: 200,
  },
  pickerView: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "flex-start",
    flexDirection: "row",
  },
});
