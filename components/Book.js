import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Book({ book }) {
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: book.coverURL }}
      />
      <View style={styles.details}>
        <Text>Title: {book.title}</Text>
        <Text>ISBN: {book.isbn}</Text>
      </View>
      <Icon
        style={styles.icon}
        name="delete"
        size={30}
        color="#e33057"
        onPress={() => {
          removeBook(item);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    // backgroundColor: "yellow",
    width: 40,
    height: 60,
    resizeMode: "contain",
  },
  box: {
    flex: 1,
    // backgroundColor: "blue",
    padding: 5,
    flexDirection: "row",
    alignItems: 'center'
  },
  details: {
    paddingLeft: 5,
    flex: 1,
    // backgroundColor: "green",
  },
  icon: {
    position: "absolute",
    right: 5
  },
});
