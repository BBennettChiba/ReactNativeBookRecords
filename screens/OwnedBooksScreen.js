import React, { useState, useEffect } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Book from "../components/Book";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import BookInfo from '../components/BookInfo'

export default function OwnedBooksScreen({ navigation }) {
  const me = { name: "Bryson", id: "c83d9cb1-aaf2-4fcd-8dd5-a38aab6ce485" };
  const [scanning, setScanning] = useState(false);
  const user = useUser()
  const books = user.ownedBooks?.items;
  const [pressedBook, setPressedBook] = useState(null);

  return (
    <SafeAreaView>
      {!pressedBook && <View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>Books You Own!</Text>
        </View>
        <FlatList
          data={books}
          // extraData={books}
          renderItem={({ item }) => (
            <View style={styles.bookBox} >
              <Book book={item} key={item.id} setPressedBook={setPressedBook}/>
            </View>
          )}
        />
      </View>}
      {pressedBook && <BookInfo book={pressedBook} setPressedBook={setPressedBook}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bookBox: {
    backgroundColor: "pink",
    flexDirection: "row",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
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
