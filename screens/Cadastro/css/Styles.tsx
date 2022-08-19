import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cadastro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:20,
        margin: 10
    },

    caixa:{
        width: 200,
        padding: 10,
        margin: 5,
        backgroundColor:"White",
        borderColor: "silver", 
        borderWidth: 1,
    },

    btntccadastrar:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        marginLeft: "auto",
        marginRight: "auto",
    }

})