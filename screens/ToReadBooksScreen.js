import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import AddBookToRead from '../components/AddWantedBook'

export default function ToReadBooksScreen({navigation}) {
    return (
        <SafeAreaView>
            <Text>To Read</Text>
            <AddBookToRead/>
        </SafeAreaView>
    )
}
