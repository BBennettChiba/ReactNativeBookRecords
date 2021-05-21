import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";

export default function BookInfo({ book, setPressedBook }) {
  return (
    <View style={{ ...styles.main, height: "100%" }}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{book.title}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: book.coverURL }}
          />
        </View>
        <Text style={styles.text}>Author(s): {book.authors.join(", ")}</Text>
        <Text style={styles.text}>ISBN: {book.isbn}</Text>
        <Text style={styles.text}>Language: {book.language}</Text>
        <Text style={styles.text}>Page Count: {book.pageCount}</Text>
        <Text style={styles.text}>Published Date: {book.publishedDate}</Text>
        <Text style={styles.text}>Publisher: {book.publisher}</Text>
        <Text style={styles.text}>
          Description: {book.description}
        </Text>
      </ScrollView>
      <View style={styles.buttonView}>
        <Button
          title="Close"
          style={styles.button}
          onPress={() => setPressedBook(null)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    alignSelf: "center",
    width: "100%",
    alignItems: "stretch",
    position: "absolute",
    bottom: 4,
    borderRadius: 20,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: 20,
  },
  main: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    paddingBottom: 45,
    height: 100,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
  },
  image: {
    height: 128,
    width: 99,
    alignContent: "center",
  },
  text: {
    fontSize: 16,
  },
});
