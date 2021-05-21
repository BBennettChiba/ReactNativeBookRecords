import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Book from "./Book";
import Icon from "react-native-vector-icons/AntDesign";

export default function BookList({ books, setPressedBook, removeBook }) {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 50 }}
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
    backgroundColor: "pink",
  },
  icon: {
    right: 5,
    alignSelf:"center"
  },
  container: {
    marginBottom: 20,
  },
});
