import { AntDesign } from "@expo/vector-icons";
import { View, Image, Text } from "react-native";
import { styles } from "../css/Styles";

export default function Header(){
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-computador-de-tecnologia_23-2149199401.jpg?w=740&t=st=1661888856~exp=1661889456~hmac=1e137faf6f77f391f16fd51b2e9948f0a774160e99b70c682cc2b7834f160b8a"}} style={styles.logo} />
            <Text style={styles.titulo}>Loja rene</Text>
            <AntDesign name="shoppingcart" size={24} color="white"/>
        </View>
    )
}