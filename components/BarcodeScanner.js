import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { API, graphqlOperation } from "aws-amplify";
import { createOwnedBook } from "../src/graphql/mutations";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useUserUpdate } from "../contexts/UserContext";

export default function BarcodeScanner() {
  const user = useUser();
  const books = user.ownedBooks.items;
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

  async function addBook(isbn) {
    let googleBooks;
    try {
      googleBooks = (
        await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        )
      ).data.items[0];
    } catch (e) {
      alert(`ISBN not recognized, try manually inputting`);
      console.log(e);
      return;
    }
    let title = googleBooks.volumeInfo.subtitle
      ? `${googleBooks.volumeInfo.title} ${googleBooks.volumeInfo.subtitle}`
      : googleBooks.volumeInfo.title;
    const book = {
      title,
      userID: user.id,
      isbn: isbn,
      coverURL: googleBooks.volumeInfo.imageLinks.thumbnail,
      language: googleBooks.volumeInfo.language,
      pageCount: googleBooks.volumeInfo.pageCount,
      publisher: googleBooks.volumeInfo.publisher,
      publishedDate: googleBooks.volumeInfo.publishedDate,
      description: googleBooks.volumeInfo.description,
      categories: googleBooks.volumeInfo.categories,
      authors: googleBooks.volumeInfo.authors,
    };

    try {
      const newBook = await API.graphql(
        graphqlOperation(createOwnedBook, { input: book })
      );
      setUser({
        ...user,
        ownedBooks: { items: [...books, newBook.data.createOwnedBook] },
      });
    } catch (err) {
      console.log("error creating book:", err);
    }
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

// {scanned && (
//   <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
// )}
