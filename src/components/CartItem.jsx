import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import {Entypo} from '@expo/vector-icons'
import { useEffect, useState } from "react";

const CartItem = ({cartItem}) => {
    const[isPortrait, setIsPortrait] = useState(true);
    const[isLandscape, setIsLandscape] = useState(false);

    const {width, height} = useWindowDimensions();

    useEffect(()=>{
        if(height>width){
            setIsPortrait(true);
            setIsLandscape(false);
        } else {
            setIsPortrait(false);
            setIsLandscape(true);
        }
    },[width, height])


  return (
    <View style={styles.card} >
        <View style={styles.textContainer}>
            <Text style={styles.text}>{cartItem.title}</Text>
            <Text style={styles.text2}>{cartItem.brand}</Text>
            <Text style={styles.text2}>{cartItem.price}</Text>
        </View>
        <Image style={styles.image}  source={ isPortrait? {uri: cartItem.images[4]} : {uri: cartItem.images[0]} }  />
        <Entypo name="trash" size={46} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 120,
        backgroundColor: colors.lighten,
        padding: 10,
        margin: 10,
        borderWidth: 3,
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "CabinBold",
        fontSize: 16,
        color: "black",
    },
    text2: {
        fontFamily: "CabinRegular",
        fontSize: 14,
        color: colors.petrol_200,
    },
    image : {
        minHeight: 20,
        minWidth: 20,
        maxWidth: 60,
        width: '30%',
        borderRadius: 5,
    },
});