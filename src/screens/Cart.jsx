import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCartItems from '../data/cart.json'
import { FlatList } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const total = allCartItems.reduce(
            (acc, currentItem) =>
                (acc += currentItem.quantity * currentItem.price),
                0
        );
        setCartItems(allCartItems);
        setTotal(total);
    }, [allCartItems]);

  return (
    <View style={styles.container}>  
        <FlatList
        style={styles.list}
        data = {cartItems}
        renderItem ={ ({item})=> <CartItem cartItem = {item}/>} 
        keyExtractor = {(cartItem)=>cartItem.id}
        />
        <View style={styles.confirmContainer}>
            <Pressable>
                <Text style={styles.confirmText}>CONFIRM</Text>
            </Pressable>
            <Text style={styles.confirmText} >TOTAL: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingBottom: 100,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor: colors.petrol_300
    },
    list :{
        width:"100%",
    },
    confirmContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"gray",
        padding: 10,
        width:"100%",
    },
    confirmText:{
        fontFamily: "CabinRegular",
        fontSize: 20,
        color: "white",
    },
});