import React from "react";
import { StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanBookScreen from "../screens/ScanBookScreen";
import OwnedBooksScreen from "../screens/OwnedBooksScreen";
import ToReadBooksScreen from "../screens/ToReadBooksScreen";
// import WantedBooksScreen from '../screens/OwnedBooksScreen'
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon size={styles.icon} name="book"/>
          ),
        }}
        name="Owned Books"
        component={OwnedBooksScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon size={styles.icon} name="pluscircleo" />
          ),
        }}
        name="Scan Book"
        component={ScanBookScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon size={styles.icon} name="bars" />
          ),
        }}
        name="To Read"
        component={ToReadBooksScreen}
      />
      {/* <Tab.Screen name="Want" component={WantedBooksScreen} /> */}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon:30
})