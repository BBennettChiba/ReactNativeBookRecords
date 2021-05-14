import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

export default function Book({ book }) {
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.isbn}</Text>
      <Image 
      style={styles.image}
      resizeMode="contain"
      source={{uri:book.coverURL}}/>
    </View>
  );
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        resizeMode:"contain"
    }
  })