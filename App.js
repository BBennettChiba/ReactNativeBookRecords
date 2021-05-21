import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./contexts/UserContext";

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
    flexDirection: "row",
  },
});

export default App;
