import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { API, graphqlOperation } from "aws-amplify";
import { createBook } from "../src/graphql/mutations";
import axios from "axios";


export default function BarcodeScanner({scanning, setScanning, books, setBooks}) {
  const [hasPermission, setHasPermission] = useState(null);
  const me = { name: "Bryson", id: "c83d9cb1-aaf2-4fcd-8dd5-a38aab6ce485" };


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanning(false)
    addBook(data)
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
      console.log('return from google ', googleBooks)
    } catch (e) {
      alert(`ISBN not recognized, try manually inputting`)
      console.log(e);
      return;
    }
    let title = googleBooks.volumeInfo.subtitle ? `${googleBooks.volumeInfo.title} ${googleBooks.volumeInfo.subtitle}` : googleBooks.volumeInfo.title
    const book = {
      title,
      userID: me.id,
      isbn: isbn,
      coverURL: googleBooks.volumeInfo.imageLinks.thumbnail,
    };

    try {
      const newBook = await API.graphql(graphqlOperation(createBook, { input: book }));
      console.log(newBook.data.createBook)
      setBooks([...books, newBook.data.createBook]);
    } catch (err) {
      console.log("error creating book:", err);
    }
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        onBarCodeScanned={!scanning ? undefined : handleBarCodeScanned}
        style={{flex:1}}        
      />
      <Button style={styles.button} title="Cancel" onPress={()=>{setScanning(false)}}/>

    </View>
  );
}

const styles = {
  container: {
    flex:5
  },
  button:{flex:1}
};
