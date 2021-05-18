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
      <Text style={styles.text}>Author(s): {book.authors.join(', ')}</Text>
      <Text style={styles.text}>ISBN: {book.isbn}</Text>
      <Text style={styles.text}>Language: {book.language}</Text>
      <Text style={styles.text}>Page Count: {book.pageCount}</Text>
      <Text style={styles.text}>Published Date: {book.publishedDate}</Text>
      <Text style={styles.text}>Publisher: {book.publisher}</Text>
      <Text style={styles.text} numberOfLines={12}>Description: {book.description}</Text>
      <Button title="Close" onPress={() => setPressedBook(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position:"absolute",
    bottom: 0,
  },
  main: {
    borderRadius: 10,
    margin: 10,
    padding: 5,
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
  text:{
    fontSize: 17
  }
});
