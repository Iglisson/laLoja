import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style.js";

export default function Home({ navigation }) {

    const [name, setName] = useState("");

    const login = () => {
        if (name !== "") {
            navigation.navigate("Client", {client: name})
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

            <TouchableOpacity style={styles.btnArea} onPress={login}>
                <Text style={styles.btnEntrar}>Entrar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}