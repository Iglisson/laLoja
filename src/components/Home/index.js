import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style.js"

export default function Home({ navigation }) {

    const [name, setName] = useState("");

    function userLogin() {
        if (name !== "") {
            return navigation.navigate("Client", {client: name })
        } else {
            alert("Preencha o Nome do Cliente!")
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            
            <TextInput
            style={styles.input}
            placeholder="Nome do Cliente"            
            value={name}
            onChangeText={ (v) => {setName(v)}}
            />

            <TouchableOpacity style={styles.btnArea} onPress={userLogin}>
                <Text style={styles.btnEntrar}>Entrar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}