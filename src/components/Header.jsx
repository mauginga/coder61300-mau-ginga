import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";

function Header ({title}) {
    return (
        <View style ={styles.container}>
            <Image
                source={require('../../assets/bauma-logo.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            <Text style = {styles.text} >
            {title}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        backgroundColor: colors.petrol_100,
        paddingTop: 8,
        paddingHorizontal: 5,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        fontFamily: 'CabinBold',
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 20,
    }
})