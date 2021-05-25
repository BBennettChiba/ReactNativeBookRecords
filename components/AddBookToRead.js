import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Checkbox from "expo-checkbox";
import BookInfo from "./BookInfo";
import SearchResults from "./SearchResults";

export default function AddBookToRead() {
  const [searchByTitle, setSearchByTitle] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [pressedBook, setPressedBook] = useState(null);

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
    debounce(async (val, search) => {
      let searchParam = search ? "intitle:" : "inauthor:";
      val = val.toLowerCase();
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchParam}${val}`
      )
        .then((res) => res.json())
        .then((result) => {
          result = result.items.filter(
            (a) =>
              a.volumeInfo.publisher &&
              a.volumeInfo.categories &&
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
            categories: a.volumeInfo.categories,
            publisher: a.volumeInfo.publisher
          }));
          setSearchResult(result);
        });
      return;
    }, 500),
    []
  );

  function bookSearch(val, search) {
    setSearchValue(val);
    if (val === "" || val.replace(/\s/g, "") === "") {
      setSearchResult([]);
      return;
    }
    debouncedFetch(val, search);
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
                  onChange={() => {
                    setSearchByTitle(true);
                  }}
                />
                <Text>Search by Title</Text>
              </View>
              <View style={styles.checkbox}>
                <Checkbox
                  value={!searchByTitle}
                  onChange={() => {
                    setSearchByTitle(false);
                  }}
                />
                <Text>Search by Author</Text>
              </View>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                onChangeText={(val) => bookSearch(val, searchByTitle)}
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
            renderItem={({ item }) => (
              <SearchResults item={item} setPressedBook={setPressedBook} />
            )}
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
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  inputBox: {
    flex: 1,
    alignItems: "center",
  },
});
