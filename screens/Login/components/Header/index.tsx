import { Text, View } from "react-native";
import { styles } from "../../css/Styles";


export default function Header(){
    return (
        <View>
            <Text style={styles.txtLogin}>
                Login
            </Text>
        </View>
    )
}