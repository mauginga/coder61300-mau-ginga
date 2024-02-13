import { View, Text, StyleSheet } from "react-native"
import Header from "../components/Header"
import ItemListCategories from "./ItemListCategories"
import { colors } from "../global/colors"

function Home () {
    return (
        <View style = {styles.container}>
            <Text>
                Bienvenidos BAUMA - Venta de Insumos Petroleros
            </Text>
            <Header title ='Categories'/>
            <ItemListCategories />
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.petrol_200,
    }
});