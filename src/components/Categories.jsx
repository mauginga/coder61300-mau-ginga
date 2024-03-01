import { FlatList, View, StyleSheet} from "react-native";
import React from "react";

import CategoryItem from './CategoryItem';
import { colors } from "../global/colors";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const Categories = ({navigation}) => {

    const categories = useSelector(state => state.shopReducer.value.categories)

    return (
        <View style={styles.container}>
            <Counter />
            <FlatList
                style={styles.container} 
                data = {categories}
                keyExtractor ={(category) => category}
                renderItem={({item}) => <CategoryItem navigation = {navigation} category ={item}
                />}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 5,
    }
})