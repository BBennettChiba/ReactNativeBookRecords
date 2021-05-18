import React, { useState, useEffect } from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../contexts/UserContext";
import BookInfo from '../components/BookInfo';
import BookList from '../components/BookList'

export default function OwnedBooksScreen({ navigation }) {
  const user = useUser()
  const books = user.ownedBooks?.items;
  const [pressedBook, setPressedBook] = useState(null);

  return (
    <SafeAreaView>
      {!pressedBook && <View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>Books You Own!</Text>
        </View>
        <BookList books={books} setPressedBook={setPressedBook}/>
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