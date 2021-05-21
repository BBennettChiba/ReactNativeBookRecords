import React, { useState } from "react";
import { Text, Button, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddBookToRead from "../components/AddBookToRead";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import BookInfo from "../components/BookInfo";
import BookList from '../components/BookList'
import {deleteBookToRead} from '../src/graphql/mutations'
import { API, graphqlOperation } from "aws-amplify";

export default function ToReadBooksScreen({ navigation }) {
  const [addBookPressed, setAddBookPressed] = useState(false);
  const [pressedBook, setPressedBook] = useState(null)
  const user = useUser();
  const books = user.booksToRead?.items;
  const setUser = useUserUpdate();

  async function removeBook(toDelete) {
    try {
      await API.graphql(
        graphqlOperation(deleteBookToRead, { input: { id: toDelete.id } })
      );
      let updated = books.filter((a) => a.id !== toDelete.id);
      setUser((prev) => ({
        ...prev,
        booksToRead: { items: updated },
      }));
    } catch (e) {
      console.log(`There was an error removing book `, e);
    }
  }


  return (
    <SafeAreaView>
      {!addBookPressed && (
        <View>
          <Text>To Read</Text>
          { pressedBook === null && <BookList removeBook={removeBook} books={books} setPressedBook={setPressedBook}/>}
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
