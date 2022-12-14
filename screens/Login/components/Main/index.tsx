import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { styles } from "../../css/Styles";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function Main( props:any ) {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View>
            <TextInput placeholder="Usuário" keyboardType="default" style={styles.caixa} value={usuario} onChangeText={(value)=> setUsuario(value)}/>

            <TextInput secureTextEntry placeholder="Senha" style={styles.caixa} value={senha} onChangeText={(value)=> setSenha(value)}/>

            <TouchableOpacity onPress={()=> {

                //efetuarLogin(usuario,senha);
                props.acao.navigate("Home");
            }} style={styles.btntllogin} >
                <MaterialCommunityIcons name="login" size={24} color="black"/>
                <Text> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> props.acao.navigate("Cadastro")} style={styles.btntlcadastrar} >
                <Feather name="user-plus" size={24} color="black" />
                <Text> Cadastro </Text>
            </TouchableOpacity>
        </View>
    )
}


function efetuarLogin(usuario:any,senha:any){
    if(
    usuario=="" || 
    senha==""){
        return Alert.alert("Erro", "Você deve preencher todos os campos");
    }

    fetch("http://10.26.49.29:8080/api/usuarios/login", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario:usuario,
            senha:senha
        })
    })
    .then((response) => response.json())
    .then((rs)=>console.log(rs))
    .catch((erro)=>console.error(`Erro -> ${erro}`))
}