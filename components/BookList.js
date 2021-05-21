import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Book from "./Book";
import Icon from "react-native-vector-icons/AntDesign";

export default function BookList({ books, setPressedBook, removeBook }) {

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <View style={styles.bookBox}>
          <Book book={item} key={item.id} setPressedBook={setPressedBook} />
          <Icon
            style={styles.icon}
            name="delete"
            size={30}
            color="#e33057"
            onPress={() => {
              removeBook(item);
            }}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  bookBox: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    right: 5,
  },
});
