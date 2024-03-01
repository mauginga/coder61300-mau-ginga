import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";

const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch();

    return (
        <>
        <Card style ={{paddingTop: 20}}>
            <Pressable onPress={()=>navigation.navigate("Categorías", {category})}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
        </Card>
        </>
    )
}

export default CategoryItem
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'CabinRegular',
    },
})