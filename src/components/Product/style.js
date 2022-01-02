import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 8,
        alignItems: "center",
        justifyContent: "space-between",
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
    description: {
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#F0F1F2",
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "normal"
    },
    price: {
        fontSize: 24,
        fontWeight: "bold" 
    },
    modal: {
        width: "100%"
    },
    modalPortrait: {
        width: "100%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#11538C",
        marginBottom: 30,
        borderRadius: 5
    },
    modalImage: {
        width: 300,
        height: 300
    },
    modalDescription: {
        width: "100%",
        alignContent: "flex-start",
        paddingHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: "#F0F1F2",
        borderRadius: 15
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: "normal"
    },
    modalPrice: {
        fontSize: 34,
        fontWeight: "bold" 
    },
    modalPag: {
        fontSize: 22,
        fontWeight: "normal" 
    },
    modalBtnArea: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 15
    },
    modalBtnClose: {
        backgroundColor: "#11538C",
        borderRadius: 10
    },
    modalBtnReturnClose: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F0F1F2",
        padding: 10
    },
    modalBtnReturn: {
        alignSelf: "flex-end",
        backgroundColor: "#11538C",
        borderRadius: 10
    },
    modalBtnReturnText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F0F1F2",
        padding: 10
    },
});

export default styles;