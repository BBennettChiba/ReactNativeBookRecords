import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Button, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { deleteBook } from "./src/graphql/mutations";
import { listBooks } from "./src/graphql/queries";
import Book from "./components/Book";
import BarcodeScanner from "./components/BarcodeScanner";

Amplify.configure(config);

const App = () => {
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
    <SafeAreaView style={styles.container}>
      {scanning && (
        <BarcodeScanner
          scanning={scanning}
          setScanning={setScanning}
          books={books}
          setBooks={setBooks}
        />
      )}
      {!scanning && (
        <FlatList
          style={{ flex: 5 }}
          data={books}
          // extraData={books}
          renderItem={({ item }) => (
            <View style={styles.bookBox}>
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
      )}
      {!scanning && (
        <View>
          <Button
            style={styles.button}
            title="Scan New Book"
            onPress={() => {
              setScanning(!scanning);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  book: { marginBottom: 15 },
  input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
  bookName: { fontSize: 18 },
  button: {
    flex: 1,
  },
  bookBox: {
    backgroundColor: "pink",
    flexDirection: "row",
  },
});

export default App;
// books.map((book, index) => <Book book={book} key={book.id} />)
/* <TextInput
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
