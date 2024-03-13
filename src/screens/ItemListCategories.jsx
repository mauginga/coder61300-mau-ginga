import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, {useEffect, useState} from "react";

import { colors } from "../global/colors";

import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";


const ItemListCategories = ({navigation}) =>{
 //saco route de props
    // const productsFilteredByCategory = useSelector((state)=> state.shopReducer.value.productsFilteredByCategory);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const category = useSelector((state)=>state.shopReducer.value.categorySelected);
    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category);


    useEffect(() => {
        console.log(productsFilteredByCategory);
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);

    return (
        <>
            <View style={styles.container}>
                    <Search onSearch={setKeyword}/>
                        <FlatList 
                        data={products}
                        renderItem={({item})=><ProductItem navigation={navigation} item={item} />}
                        keyExtractor={(item)=> item.id}
                        />
            </View>
        </>
    )
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingHorizontal: 5,
        marginTop: 25,
        width: '100%',
        backgroundColor: colors.lighten,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
    },
    headerProduct:{
        backgroundColor: colors.lighten,
        color: 'black',
        fontSize: 20,
    },
    headerInput:{
        backgroundColor: 'black',
        width: '100%',
    }
});