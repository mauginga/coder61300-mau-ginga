import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductItem = ({item, setProductDetailId}) => {
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
    <Pressable onPress={()=>setProductDetailId(item.id)}>
        <Card  style = {styles.card}>
            <Text style = {width < 400 ? styles.textMin : styles.text}>{item.title}</Text>
            <Image style={styles.image}  source={ isPortrait? {uri: item.images[0]} : {uri: item.images[1]} }  />
        </Card>
    </Pressable>
    )
}

export default ProductItem
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'CabinRegular',
        width: '70%',
    },
    textMin: {
        fontSize: 14,
        fontFamily: 'CabinRegular',
        width: '70%',
    },
    image : {
        minHeight: 90,
        minWidth: 90,
        maxWidth: 300,
        width: '30%',
        borderRadius: 5,
    },
    card: {
        height: 100,
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    }
})