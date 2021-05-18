import React, { useState } from "react";
import { Text, Button, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddBookToRead from "../components/AddBookToRead";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import Book from '../components/Book'
import BookInfo from "../components/BookInfo";
import BookList from '../components/BookList'

export default function ToReadBooksScreen({ navigation }) {
  const [addBookPressed, setAddBookPressed] = useState(false);
  const [pressedBook, setPressedBook] = useState(null)
  const user = useUser()
  const books = user.booksToRead?.items;

  return (
    <SafeAreaView>
      {!addBookPressed && (
        <View>
          <Text>To Read</Text>
          { pressedBook === null && <BookList books={books} setPressedBook={setPressedBook}/>}
          {pressedBook && <BookInfo book={pressedBook} setPressedBook={setPressedBook}/>}
          <Button title="Add Book" onPress={() => setAddBookPressed(true)} />
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
