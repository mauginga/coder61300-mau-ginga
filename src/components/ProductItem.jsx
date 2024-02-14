import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const ProductItem = ({item}) => {
    return (
        <Card  style = {{marginVertical :20}}>
            <Text style = {styles.text}>{item.title}</Text>
        </Card>
    )
}

export default ProductItem
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    }
})