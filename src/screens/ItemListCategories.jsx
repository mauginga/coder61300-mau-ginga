import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";

const ItemListCategories = ({category}) =>{
    return (
        <>
            <Header title={category}/>
            <View style={styles.container}>
                <Text>Item List Category </Text>
            </View>
            <Categories />
        </>
    )
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.petrol_200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});