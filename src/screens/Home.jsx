import { View, Text, StyleSheet, Image } from "react-native"
import Header from "../components/Header"
import Categories from "../components/Categories";


function Home ({setCategorySelected}) {
    return (
        <>
            <View style = {styles.container}>
                <Image
                source={require('../../assets/bauma-logo.png')}
                style={styles.logo}
                resizeMode="contain"
                />
                <Text style = {styles.text}>
                    Insumos Petroleros
                </Text>
                <Header title={'Categorias'} />
            </View>
            <Categories setCategorySelected ={setCategorySelected} />
        </>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 8,
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
});