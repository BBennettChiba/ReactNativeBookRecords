import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { API, graphqlOperation } from "aws-amplify";
import { useUser, useUserUpdate } from "../contexts/UserContext";
import {createBookToRead} from '../src/graphql/mutations'

export default function SearchResults({ item, setPressedBook }) {
  const user = useUser();
  const userUpdate = useUserUpdate();
  async function handleAddBook(book) {
    let newBook = await API.graphql(
      graphqlOperation(createBookToRead, {
        input: { ...book, userID: user.id },
      })
    );
    userUpdate({
      ...user,
      booksToRead: {
        items: [...user.booksToRead.items, newBook.data.createBookToRead],
      },
    });
  }

  return (
    <View style={{ flexDirection: "row", padding: 5, flex: 1 }}>
      <Pressable
        style={{ flexDirection: "row", flex: 5 }}
        onPress={() => setPressedBook(item)}
      >
        <Image style={styles.book} source={{ uri: item.coverURL }}></Image>

        <View style={styles.details}>
          <Text>Title: {item.title}</Text>
          <Text numberOfLines={2}>Author: {item.authors.join(", ")}</Text>
        </View>
      </Pressable>
      <Pressable
        style={{ justifyContent: "center", paddingRight: 5 }}
        onPress={() => handleAddBook(item)}
      >
        <Icon name="pluscircleo" size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  book: {
    width: 40,
    height: 60,
  },
  details: {
    paddingLeft: 5,
    flex: 5,
  },
});
