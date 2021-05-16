import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {UserContextProvider} from "./contexts/UserContext";

Amplify.configure(config);

const App = () => {
  return (
    <UserContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  book: { marginBottom: 15 },
  input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
  bookName: { fontSize: 18 },
  button: {
    flex: 1,
  },
  bookBox: {
    backgroundColor: "pink",
    flexDirection: "row",
  },
});

export default App;
// books.map((book, index) => <Book book={book} key={book.id} />)
/* <TextInput
        onChangeText={val => setInput('name', val)}
        style={styles.input}
        value={formState.name}
        placeholder="name"
      />
      <TextInput
        onChangeText={val => setInput('isbn', val)}
        style={styles.input}
        value={formState.description}
        placeholder="ISBN"
      />
      <Button title="Create Book" onPress={addBook} /> */

/*(
    <SafeAreaView style={styles.container}>
      {scanning && (
        <BarcodeScanner
          scanning={scanning}
          setScanning={setScanning}
          books={books}
          setBooks={setBooks}
        />
      )}
      {!scanning && (
        <FlatList
          style={{ flex: 5 }}
          data={books}
          // extraData={books}
          renderItem={({ item }) => (
            <View style={styles.bookBox}>
              <Book book={item} key={item.id} />
              <Icon
                name="delete"
                size={30}
                color="#e33057"
                onPress={() => {
                  removeBook(item);
                }}
              />
            </View>
          )}
        />
      )}
      {!scanning && (
        <View>
          <Button
            style={styles.button}
            title="Scan New Book"
            onPress={() => {
              setScanning(!scanning);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  )*/
