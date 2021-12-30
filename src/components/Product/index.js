import React from "react";
import { Image, Text, View } from "react-native"
import styles from "./style.js"

export default function Product({ data }) {
    return (
        <View style={styles.container}>

            <View style={styles.portrait}>
                <Image
                    style={styles.image}
                    resizeMode="center"
                    source={require(`../../Images/Product/${data.img}`)}
                />
            </View>

            <View style={styles.description}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>

        </View>
    );
}