import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Book from "./Book";

export default function BookList({ books, setPressedBook }) {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <View style={styles.bookBox}>
          <Book book={item} key={item.id} setPressedBook={setPressedBook} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  bookBox: {
    flexDirection: "row",
  },
});
