import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import { colors } from "../global/colors";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
// import { GoMoveToStart } from "@primer/octicons-react";

const ItemListCategories = ({category, setCategorySelected}) =>{

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        if (category) {
            const products = allProducts.filter ( product => product.category === category);
            const productsFiltered = products.filter( product => product.title.includes(keyword))
            setProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter( product => product.title.includes(keyword))
            setProducts(productsFiltered)
        }
    }, [category,keyword])

    return (
        <>
            <View style={styles.container}>
                <Pressable style={styles.text} onPress = {()=> setCategorySelected('')}>
                    <Text>
                        Inicio
                    </Text>
                </Pressable>
                <View style={styles.headerInput}>     
                    <Header title={category || "Productos"} style = {styles.headerProduct}/>
                </View> 
                    <Search onSearch={setKeyword}/>
                        <FlatList 
                        data={products}
                        renderItem={({item})=><ProductItem item ={item}/>}
                        keyExtractor={(item)=> item.id}
                        />
            </View>
        </>
    )
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
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