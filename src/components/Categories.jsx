import { FlatList, View, StyleSheet} from "react-native";
import React from "react";
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from "../global/colors";

const Categories = ({setCategorySelected}) => {

    return (
        <View style={StyleSheet.container}>
            <FlatList
                style={styles.container} 
                data = {categories}
                keyExtractor ={(category) => category}
                renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} category ={item}
                />}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

    }
})