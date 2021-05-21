import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function Book({ book, setPressedBook }) {
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: book.coverURL }}
      />
      <Pressable onPress={() => setPressedBook(book)}>
        <View style={styles.details}>
          <Text>Title: {book.title}</Text>
          <Text>Authors: {book.authors.join(', ')}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 60,
    resizeMode: "contain",
  },
  box: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    paddingLeft: 5,
    paddingRight: 26,
    flex: 1,
  }
});
