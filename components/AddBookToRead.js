import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import BookInfo from "./BookInfo";
import Icon from "react-native-vector-icons/AntDesign";
import { createBookToRead } from "../src/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useUser, useUserUpdate } from "../contexts/UserContext";

export default function AddBookToRead() {
  const [searchByTitle, setSearchByTitle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [pressedBook, setPressedBook] = useState(null);
  const user = useUser();
  const userUpdate = useUserUpdate();

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }

  const debouncedFetch = useCallback(
    debounce(async (val) => {
      val = val.toLowerCase();
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}`)
        .then((res) => res.json())
        .then((result) => {
          result = result.items.filter(
            (a) =>
              a.volumeInfo.imageLinks &&
              a.volumeInfo.industryIdentifiers &&
              a.volumeInfo.industryIdentifiers.some(
                (a) => a.type === "ISBN_13"
              ) &&
              a.volumeInfo.authors
          );
          result = result.map((a) => ({
            authors: a.volumeInfo.authors,
            title: a.volumeInfo.title,
            coverURL: a.volumeInfo.imageLinks.smallThumbnail,
            isbn: a.volumeInfo.industryIdentifiers.find(
              (a) => a.type === "ISBN_13"
            ).identifier,
            language: a.volumeInfo.language,
            pageCount: a.volumeInfo.pageCount,
            publishedDate: a.volumeInfo.publishedDate,
            publisher: a.volumeInfo.publisher,
            description: a.volumeInfo.description,
          }));
          setSearchResult(result);
        });
      return;
    }, 500),
    []
  );

  function bookSearch(val) {
    setSearchValue(val);
    if (val === "" || val.replace(/\s/g, "") === "") {
      setSearchResult([]);
      return;
    }
    debouncedFetch(val);
  }

  function renderedSearchResults({ item }) {
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
    <View>
      {pressedBook === null && (
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.checkboxBox}>
              <View style={styles.checkbox}>
                <Checkbox
                  value={searchByTitle}
                  onValueChange={() => setSearchByTitle(true)}
                />
                <Text>Search by Title</Text>
              </View>
              <View style={styles.checkbox}>
                <Checkbox
                  value={!searchByTitle}
                  onValueChange={() => setSearchByTitle(false)}
                />
                <Text>Search by Author</Text>
              </View>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={(val) => bookSearch(val)}
                style={styles.input}
                value={searchValue}
                placeholder={
                  searchByTitle
                    ? "Input title please"
                    : "Input Author name please"
                }
              />
            </View>
          </View>
          <FlatList
            data={searchResult.length > 0 ? searchResult : []}
            renderItem={renderedSearchResults}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      {pressedBook && (
        <BookInfo book={pressedBook} setPressedBook={setPressedBook} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBox: {
    flexDirection: "column",
    backgroundColor: "pink",
  },
  checkbox: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    margin: 0,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  inputBox: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
  },
  book: {
    width: 40,
    height: 60,
  },
  details: {
    paddingLeft: 5,
    flex: 5,
  },
});
