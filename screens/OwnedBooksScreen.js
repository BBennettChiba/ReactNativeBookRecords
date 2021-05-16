import React, { useState, useEffect } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { API, graphqlOperation } from "aws-amplify";
import { deleteBook } from "../src/graphql/mutations";
import { listBooks } from "../src/graphql/queries";
import Book from "../components/Book";
import Icon from "react-native-vector-icons/AntDesign";

export default function OwnedBooksScreen({ navigation }) {
  const me = { name: "Bryson", id: "c83d9cb1-aaf2-4fcd-8dd5-a38aab6ce485" };
  const filter = { filter: { userID: { eq: me.id } } };
  const [books, setBooks] = useState([]);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const bookData = await API.graphql(graphqlOperation(listBooks), filter);
      const books = bookData.data.listBooks.items;
      setBooks(books);
    } catch (err) {
      console.log("error fetching books");
    }
  }

  async function removeBook(book) {
    console.log(book);
    try {
      await API.graphql(
        graphqlOperation(deleteBook, { input: { id: book.id } })
      );
      setBooks(books.filter((a) => a.id !== book.id));
    } catch (e) {
      console.log(`There was an error removing book `, e);
    }
  }

  return (
    <SafeAreaView>
      <FlatList
        data={books}
        // extraData={books}
        renderItem={({ item }) => (
          <View style={styles.bookBox}>
              <Text>book</Text>
            <Book book={item} key={item.id} />
            <Icon
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bookBox: {
    backgroundColor: "pink",
    flexDirection: "row",
  },
});
// {books.map((book, index) => <Book book={book} key={book.id} />}
/*<TextInput
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
      <Button title="Create Book" onPress={addBook} /> */
