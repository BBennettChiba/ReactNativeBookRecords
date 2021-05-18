import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { API, graphqlOperation } from "aws-amplify";
import { deleteOwnedBook } from "../src/graphql/mutations";
import { useUser, useUserUpdate } from "../contexts/UserContext";

export default function Book({ book, setPressedBook }) {
  const user = useUser();
  const books = user.ownedBooks.items
  const setUser = useUserUpdate();

  async function removeBook(toDelete) {
    try {
      await API.graphql(
        graphqlOperation(deleteOwnedBook, { input: { id: toDelete.id } })
      );
      setUser({...user, ownedBooks:books.filter((a) => a.id !== toDelete.id)});
    } catch (e) {
      console.log(`There was an error removing book `, e);
    }
  }

  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: book.coverURL }}
      />
      <Pressable  onPress={() => setPressedBook(book)}>
        <View style={styles.details}>
          <Text>Title: {book.title}</Text>
          <Text>Authors: {book.authors}</Text>
        </View>
      </Pressable>
      <Icon
        style={styles.icon}
        name="delete"
        size={30}
        color="#e33057"
        onPress={() => {
          removeBook(book);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 60,
    resizeMode: "contain",
  },
  box: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    paddingLeft: 5,
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 5,
  },
});
