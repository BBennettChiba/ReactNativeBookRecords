import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Picker } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import BookInfo from "../components/BookInfo";
import BookList from "../components/BookList";
import { API, graphqlOperation } from "aws-amplify";
import { deleteOwnedBook } from "../src/graphql/mutations";
import sorts from '../utils/sorts'

export default function OwnedBooksScreen({ navigation }) {
  const user = useUser();
  const setUser = useUserUpdate();
  const [pressedBook, setPressedBook] = useState(null);
  const [selectedValue, setSelectedValue] = useState("title");

  async function removeBook(toDelete) {
    try {
      await API.graphql(
        graphqlOperation(deleteOwnedBook, { input: { id: toDelete.id } })
      );
      let updated = user.ownedBooks.items.filter((a) => a.id !== toDelete.id);
      setUser((prev) => ({
        ...prev,
        ownedBooks: { items: updated },
      }));
    } catch (e) {
      console.log(`There was an error removing book `, e);
    }
  }

  function sort(type) {
    let books = user.ownedBooks.items;
    books = books.sort(sorts[type]);
    setUser({
      ...user,
      ownedBooks: { items: books },
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!pressedBook && (
        <View>
          <View style={styles.top}>
            <Text style={{ fontSize: 20 }}>Books You Own!</Text>
            <View style={styles.pickerView}>
              <Text>Sort</Text>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue) =>{
                  setSelectedValue(itemValue)
                  sort(itemValue)
                }}
              >
                <Picker.Item label="By Author" value="author" />
                <Picker.Item label="By Title" value="title" />
                <Picker.Item label="By Recently Added" value="recent" />
              </Picker>
            </View>
          </View>
          <BookList
            books={user.ownedBooks?.items}
            setPressedBook={setPressedBook}
            removeBook={removeBook}
          />
        </View>
      )}
      {pressedBook && (
        <BookInfo book={pressedBook} setPressedBook={setPressedBook} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    display: "flex",
    alignItems:"center",
    // flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    height: 50
  },
  picker: {
    height: 30,
    width: 200,
  },
  pickerView: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "flex-start",
    flexDirection: "row",
  },
});
