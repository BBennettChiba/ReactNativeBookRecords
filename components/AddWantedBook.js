import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Checkbox from "expo-checkbox";

export default function AddBookToRead() {
  const [searchByTitle, setSearchByTitle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <View>
      <Text>Add Book</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.checkboxBox}>
          <View style={styles.checkbox}>
            <Checkbox
              //   style={styles.checkbox}
              value={searchByTitle}
              onValueChange={() => setSearchByTitle(true)}
            />
            <Text>Search by Title</Text>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              //   style={styles.checkbox}
              value={!searchByTitle}
              onValueChange={() => setSearchByTitle(false)}
            />
            <Text>Search by Author</Text>
          </View>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={(val) => setSearchValue(val)}
            style={styles.input}
            value={searchValue}
            placeholder={
              searchByTitle ? "Input title please" : "Input Author name please"
            }
          />
        </View>
      </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBox: {
    flexDirection: "column",
    backgroundColor: "pink",
  },
  checkbox: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    margin: 0,
  },
  input: {
    flex: 1,
    fontSize:15
  },
  inputBox: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
  },
});

{
  /* <TextInput
        onChangeText={val => setInput('name', val)}
        style={styles.input}
        value={formState.name}
        placeholder="name"
      />
      <TextInput
        onChangeText={val => setInput('isbn', val)}
        style={styles.input}
        value={formState.description}
        placeholder="ISBN"
      />
      <Button title="Add Book" onPress={addBook} /> */
}
