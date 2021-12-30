import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style.js";
import ProductList from "../ProductList"

export default function Client({ route }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerClient}>
                <Text style={styles.clientName}>Cliente {route.params.client}</Text>
            </View>

            <ProductList/>

        </SafeAreaView>
    );
}