import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#F0F1F2"
    },
    headerClient: {
        width: "90%",
        backgroundColor: "#11538C",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    clientName: {
        fontSize: 24,
        fontWeight: "500",
        color: "#F0F1F2"
    },
    listProducts: {
        width: "90%"
    }
});

export default styles;