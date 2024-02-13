import { StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({category}) => {
    return (
        <>
        <Card style ={{paddingTop: 20}}>
            <Text style={styles.text}>{category}</Text>
        </Card>
        </>
    )
}

export default CategoryItem
const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})