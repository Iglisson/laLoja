import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style.js";

export default function Product({ data }) {

    const [open, setOpen] = useState(false);
    const navigation = useNavigation();

    function exit() {
        alert("Compra encerrada!");
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>

            <View style={styles.portrait}>

                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Image
                        style={styles.image}
                        resizeMode="center"
                        source={{ uri: `${data.img}` }}
                        alt="imagem do produto"
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.description}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>

            <Modal animationType="slide" transparent={false} visible={open} >
                <SafeAreaView style={styles.modal}>
                    <View style={styles.modalPortrait}>
                        <Image
                            style={styles.modalImage}
                            resizeMode="center"
                            source={{ uri: `${data.img}` }}
                            alt="imagem do produto"
                        />
                    </View>
                    <View style={styles.modalDescription}>
                        <Text style={styles.modalTitle} >{data.title}</Text>
                        <Text style={styles.modalPrice} >R$ {data.price} via PIX!</Text>
                        <Text style={styles.modalPag} >ou de {data.pag} no cartão!</Text>

                        <View style={styles.modalBtnArea}>

                            <TouchableOpacity
                                style={styles.modalBtnClose}
                                onPress={() => exit()}
                            >
                                <Text style={styles.modalBtnReturnClose} >Encerrar Compra</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.modalBtnReturn}
                                onPress={() => setOpen(false)}
                            >
                                <Text style={styles.modalBtnReturnText} >Voltar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    
                </SafeAreaView>
            </Modal>

        </View>
    );
}