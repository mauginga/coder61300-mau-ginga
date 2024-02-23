import { FlatList, View, StyleSheet} from "react-native";
import React from "react";
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from "../global/colors";

const Categories = ({navigation}) => {

    return (
        <View style={styles.container}>
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