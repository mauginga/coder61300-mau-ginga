import { View, Text, StyleSheet, Image } from "react-native"
import Categories from "../components/Categories";


function Home ({navigation}) {
    return (
        <>
            <Categories navigation={navigation} />
        </>
    )
}

export default Home
const styles = StyleSheet.create({
});