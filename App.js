import React from "react";
import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./contexts/UserContext";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...config, Analytics: { disabled: true } });

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

export default withAuthenticator(App);
