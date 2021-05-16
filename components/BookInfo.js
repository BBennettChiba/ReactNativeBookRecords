import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function BookInfo({ book, setPressedBook }) {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>{book.title}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: book.coverURL }}
        />
      </View>
      <Text>ISBN: {book.isbn}</Text>
      <Text>Language: {book.language}</Text>
      <Text>Page Count: {book.pageCount}</Text>
      <Text>Published Date: {book.publishedDate}</Text>
      <Text>Publisher: {book.publisher}</Text>
      <Text>Description: {book.description}</Text>
      <Button title="Close" onPress={() => setPressedBook(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    position:"absolute",
    bottom: 0,
  },
  main: {
    //   flex:10,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    backgroundColor: "purple",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
  },
  image: {
    height: 128,
    width: 99,
    alignContent: "center",
  },
});
