import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header ({title}) {
    return (
        <View style ={styles.container}>
            <Text style = {styles.text} >
            {title}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create ({
    container: {
            backgroundColor: 'black',
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          },
    text: {
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    }
})