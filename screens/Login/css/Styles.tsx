import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:20,
        margin: 10
    },

    caixa:{
        width: 250,
        padding: 10,
        margin: 5,
        backgroundColor:"White",
        borderColor: "silver", 
        borderWidth: 1,
        borderRadius: 10
    },

    btntllogin:{
        paddingTop: 20,
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        marginLeft: "auto",
        marginRight: "auto",
    },

    btntlcadastrar:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        marginLeft: "auto",
        marginRight: "auto",
    },

})