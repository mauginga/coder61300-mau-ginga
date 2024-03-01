import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch();

    return (
        <>
            <Pressable 
                onPress={()=>{
                dispatch(setCategorySelected(category))
                navigation.navigate("Categorías", {category});
                }}
            >
                <Card style ={{paddingTop: 20}}>
                        <Text style={styles.text}>
                            {category}
                        </Text>
                </Card>
            </Pressable>
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