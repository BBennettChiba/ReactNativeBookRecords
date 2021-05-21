import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import BookInfo from '../components/BookInfo';
import BookList from '../components/BookList'
import { API, graphqlOperation } from "aws-amplify";
import {deleteOwnedBook} from '../src/graphql/mutations'

export default function OwnedBooksScreen({ navigation }) {
  const user = useUser()
  const setUser = useUserUpdate()
  const [pressedBook, setPressedBook] = useState(null);

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


  return (
    <SafeAreaView style={{flex:1}}>
      {!pressedBook && <View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>Books You Own!</Text>
        </View>
        <BookList books={user.ownedBooks?.items} setPressedBook={setPressedBook} removeBook={removeBook}/>
      </View>}
      {pressedBook && <BookInfo book={pressedBook} setPressedBook={setPressedBook}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});