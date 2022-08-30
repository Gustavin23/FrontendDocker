import { Image, View } from "react-native";

export default function Panel(){
    return(
        <View style={{height:"43%"}}>
            <Image source={{uri:"https://seusfolhetos.com.br/public/gimg/2/5/7/2/7/3/8/folheto-pichau-informatica--2572738-900-100000.jpg"}}
            style={{width:"100%", height:"100%", resizeMode:"contain"}}/>
        </View>
    )
}