import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderColor: "#11538C",
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
        marginBottom: 50,
        borderWidth: 1,
        width: "90%"
    },
    btnArea: {
        backgroundColor: "#11538C",
        padding: 10,
        borderRadius: 10
    },
    btnEntrar: {
        fontSize: 24,
        paddingHorizontal: 20,
        fontWeight: 600,
        color: "#F0F1F2"
    }
});

export default styles;