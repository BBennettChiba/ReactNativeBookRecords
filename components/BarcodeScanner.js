import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { createOwnedBook } from "../utils/Mutations";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useUserUpdate } from "../contexts/UserContext";

export default function BarcodeScanner() {
  const user = useUser();
  const books = user.ownedBooks;
  const setUser = useUserUpdate();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    addBook(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function bookFetch(isbn) {
    let book;
    let google;
    let openLibrary;
    try {
      google = (
        await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        )
      ).data.items[0];
      let title = google.volumeInfo.subtitle
        ? `${google.volumeInfo.title}: ${google.volumeInfo.subtitle}`
        : google.volumeInfo.title;
      openLibrary = (
        await axios.get(
          `https://openlibrary.org/api/books?&bibkeys=ISBN:${isbn}&jscmd=data&format=json`
        )
      ).data[`ISBN:${isbn}`];
      book = {
        title: title || openLibrary.title,
        userID: user.id,
        isbn: isbn,
        coverURL:
          google.volumeInfo.imageLinks.thumbnail || openLibrary.cover.medium,
        language: google.volumeInfo.language || "N/A",
        pageCount: google.volumeInfo.pageCount || openLibrary.number_of_pages,
        publisher:
          openLibrary.publishers.map((a) => a.name).join(", ") ||
          google.volumeInfo.publisher,
        publishedDate: google.volumeInfo.publishedDate || openLibrary.publish_date,
        description: google.volumeInfo.description || "N/A",
        categories:
          openLibrary.subjects.map((a) => a.name).join(", ") ||
          google.volumeInfo.categories,
        authors:
          google.volumeInfo.authors || openLibrary.authors.map((a) => a.name),
      };
    } catch (e) {
      alert(`ISBN not recognized, try manually inputting`);
      return;
    }
    return book;
  }

  async function addBook(isbn) {
    let book = await bookFetch(isbn);
    if(book === undefined) {
      setScanned(false)
      return;
    }
    try {
      const newBook = await createOwnedBook({ input: book })
      setUser({
        ...user,
        ownedBooks: { items: [...books, newBook.data.createOwnedBook] },
      });
    } catch (err) {
      console.log("error creating book:", err);
    }
    setScanned(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    margin: 25,
  },
  button: { flex: 1 },
};
