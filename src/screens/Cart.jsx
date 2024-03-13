import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

import { colors } from '../global/colors'
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation()
  
    const confirmCart = ()=> {
      triggerPost({ total, cartItems, user: "loggedUser"})
    }

    // const [cartItems, setCartItems] = useState([]);
    // const [total, setTotal] = useState(0);

    // useEffect(()=>{
    //     const total = allCartItems.reduce(
    //         (acc, currentItem) =>
    //             (acc += currentItem.quantity * currentItem.price),
    //             0
    //     );
    //     setCartItems(allCartItems);
    //     setTotal(total);
    // }, [allCartItems]);

  return (

    <View style={styles.container}>  
    {cartItems.length > 0 ? (
            <>
                <FlatList
                style={styles.list}
                data = {cartItems}
                renderItem ={ ({item})=> <CartItem cartItem = {item}/>} 
                keyExtractor = {(cartItem)=>cartItem.id}
                />
                <View style={styles.confirmContainer}>
                    <Pressable onPress ={confirmCart}>
                        <Text style={styles.confirmText}>CONFIRM</Text>
                    </Pressable>
                    <Text style={styles.confirmText} >TOTAL: ${total}</Text>
                </View>
            </>
    ) : (
        <Text>No hay productos agregados</Text>
    )}
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