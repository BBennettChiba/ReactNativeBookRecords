import React, { useState } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddBookToRead from "../components/AddBookToRead";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import BookInfo from "../components/BookInfo";
import BookList from "../components/BookList";
import { deleteBookToRead } from "../utils/Mutations";
import DropDown from "../components/DropDown";

export default function ToReadBooksScreen({ navigation }) {
  const [addBookPressed, setAddBookPressed] = useState(false);
  const [pressedBook, setPressedBook] = useState(null);
  const user = useUser();
  const books = user.booksToRead;
  const setUser = useUserUpdate();

  async function removeBook(toDelete) {
    try {
      await deleteBookToRead({ id: toDelete.id, userID: user.id });
      let updated = books.filter((a) => a.id !== toDelete.id);
      setUser((prev) => ({
        ...prev,
        booksToRead: updated,
      }));
    } catch (e) {
      console.log(`There was an error removing book `, e);
    }
  }

  function setBooks(books) {
    setUser({
      ...user,
      booksToRead: books,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!addBookPressed && (
        <View style={{ flex: 1 }}>
          <View style={styles.top}>
            <Text style={{ fontSize: 20 }}>To Read!!!</Text>
            <DropDown books={user?.booksToRead} setBooks={setBooks} />
          </View>
          {pressedBook === null && (
            <View style={{ flex: 1 }}>
              <BookList
                removeBook={removeBook}
                books={books}
                setPressedBook={setPressedBook}
              />
              <Button
                style={styles.button}
                title="Add Book"
                onPress={() => setAddBookPressed(true)}
              />
            </View>
          )}
          {pressedBook && (
            <BookInfo book={pressedBook} setPressedBook={setPressedBook} />
          )}
        </View>
      )}
      {addBookPressed && (
        <View>
          <AddBookToRead />
          <Button title="Close" onPress={() => setAddBookPressed(false)} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    display: "flex",
    alignItems: "center",
    // flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    height: 50,
  },
  button: {
    bottom: 50,
    position: "absolute",
  },
});

