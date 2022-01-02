import { useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./style";
import Product from "../Product";

export default function ProductList() {

    const [products, setProducts] = useState([
        {
            key: 1,
            title: "ASUS Radeon RX 6600, 8GB GDDR6",
            price: "4099.00",
            img: "https://images.kabum.com.br/produtos/fotos/234015/placa-de-video-asus-dual-rx-6600-8g-90yv0gp0-m0na00_1634147547_gg.jpg",
            pag: "12 x R$ 341.59"
        },
        {
            key: 2,
            title: "AMD Ryzen 5 4650g",
            price: "1399.99",
            img: "https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-5-pro-4650g-37ghz-42ghz-turbo-6-cores-12-threads-am4-cooler-wraith-stealth-100-100000143mpk_114714.jpg",
            pag: "12 x R$ 116.67"
        },
        {
            key: 3,
            title: "AMD Ryzeb 5 5600g",
            price: "1629.00",
            img: "https://images.kabum.com.br/produtos/fotos/181088/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-video-integrado-6-nucleos-100-100000252box_1627588230_gg.jpg",
            pag: "12 x R$ 135.75"
        },
        {
            key: 4, title: "ASUS GTX 1660Ti, 6GB GDDR6",
            price: "3459.00",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/u/tuf-gtx1660ti-o6g-evo-gaming.jpg",
            pag: "12 x R$ 288.25"
        },
        {
            key: 5,
            title: "AMD Asus Prime B450M",
            price: "647.05",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/r/prime-b450m-gamingbr-ddr423213.jpg",
            pag: "10 x R$ 64.71"
        },
        {
            key: 6,
            title: "AMD Asus Prime A320M",
            price: "387.90",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/r/prime-a320m-kbr62325.jpg",
            pag: "10 x R$ 38.79"
        },
        {
            key: 7,
            title: "Filtro de linha iClamper",
            price: "46.90",
            img: "https://m.media-amazon.com/images/I/51C9M7zl-5L._AC_SL1000_.jpg",
            pag: "5 x R$ 9.38"
        },
        {
            key: 8,
            title: "Monitor LG 23.8\"",
            price: "859.90",
            img: "https://m.media-amazon.com/images/I/712ISjcHRoL._AC_SL1500_.jpg",
            pag: "10 x R$ 85.90"
        }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtractor={(item) => String(item.key)}
                renderItem={({ item }) => <Product data={item} />}
            />
        </View>
    );
}