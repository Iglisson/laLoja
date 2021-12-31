import React, { useState } from "react";
import { Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style.js";
import * as Animatable from "react-native-animatable";

export default function Product({ data }) {

    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.portrait}>
                <Image
                    style={styles.image}
                    resizeMode="center"
                    source={require(`../../Images/Product/${data.img}`)}
                    alt="imagem do produto"
                />
            </View>

            <View style={styles.description}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setOpen(true)}
                >
                    <Text style={styles.btnText}>Detalhes</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="slide" transparent={false} visible={open} >
                <SafeAreaView style={styles.modal}>
                    <View style={styles.portrait}>
                        <Image
                            style={styles.image}
                            resizeMode="center"
                            source={require(`../../Images/Product/${data.img}`)}
                            alt="imagem do produto"
                        />
                    </View>
                    <Text>{data.title}</Text>
                    <Text>{data.price}</Text>

                    <TouchableOpacity style={styles.closeModalBtn} onPress={() => setOpen(false)} >
                        <Text style={styles.closeModalText} >Voltar</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </Modal>

        </View>
    );
}