import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./style.js";

export default function Client({ route }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Cliente {route.params.client}</Text>
            </View>

        </SafeAreaView>
    );
}