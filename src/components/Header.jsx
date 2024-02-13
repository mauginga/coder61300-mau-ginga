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
            backgroundColor: colors.petrol_100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            heigth: 80,
          },
    text: {
        fontSize: 30,
    }
})