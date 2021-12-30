import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }
    },
    portrait: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 150,
        height: 150
    },
    description: {},
    title: {
        fontSize: 20,
        fontWeight: "normal"
    },
    price: {
        fontSize: 24,
        fontWeight: "bold" 
    }
});

export default styles;