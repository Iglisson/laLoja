import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styles from "./style";
import Product from "../Product"

export default function ProductList() {

    const [products, setProducts] = useState([
        { key: 1, title: "ASUS Radeon RX 6600, 8GB GDDR6", price: "4099.00", img: "rx6600.jpg" },
        { key: 2, title: "AMD Ryzen 5 4650g", price: "1399.99", img: "ryzen4650g.jpg" },
        { key: 3, title: "AMD Ryzeb 5 5600g", price: "1629.00", img: "ryzen5600g.jpg" },
        { key: 4, title: "ASUS GTX 1660Ti, 6GB GDDR6", price: "3459.00", img: "gtx1660ti.jpg" },
        { key: 5, title: "AMD Asus Prime B450M", price: "647.05", img: "b450m.jpg" },
        { key: 6, title: "AMD Asus Prime A320M", price: "387.90", img: "a320m.jpg" },
        { key: 7, title: "Filtro de linha iClamper", price: "46.90", img: "iclamper.jpg" },
        { key: 8, title: "Monitor LG 23.8\"", price: "859.90", img: "monitorlg.jpg" }
    ]);

    return (
        <ScrollView style={styles.container}>

            <View style={styles.product}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => <Product data={item} />}
                />
            </View>


        </ScrollView>
    );
}