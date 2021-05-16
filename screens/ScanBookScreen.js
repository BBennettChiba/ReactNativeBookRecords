import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BarcodeScanner from "../components/BarcodeScanner";
export default function ScanBookScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <BarcodeScanner />
    </SafeAreaView>
  );
}
