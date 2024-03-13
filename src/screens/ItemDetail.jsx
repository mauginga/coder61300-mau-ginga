import { Pressable, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import allProducts from '../data/products.json';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/shop/cartSlice';



const ItemDetail = ({navigation, route}) => {
    const [product, setProduct] = useState(null);
    const[isPortrait, setIsPortrait] = useState(true);
    const[isLandscape, setIsLandscape] = useState(false);

    const{id} = route.params;

    const dispatch = useDispatch();
    const onAddCart = ()=>{
      dispatch(addItem({...product, quantity:1}))
      // cantidad hardcodeada en 1 por ahora
    }

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



    useEffect(()=>{
        const productFinded = allProducts.find((product)=> product.id === id);
        setProduct(productFinded)
    }, [id])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style = {styles.main} >
            {product ?
            (
            
            <View style={styles.itemDetails}>
                <Image
                source = {{uri: product.images[0]}}
                // source = {isPortrait?{uri: product.images[0]} : {uri: product.images[1]}}
                style = {isLandscape?  styles.imageLandscape : styles.image }
                resizeMode = "cover"
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Pressable style={styles.buyNow} onPress={onAddCart} >
                    <Text style={styles.buttonText} >Add to Cart</Text>
                </Pressable>
            </View>
            ): (
                <View style={styles.itemDetails}>
                    <Text style = {styles.goBack}> CARGANDO ..... </Text>
                </View>
            )}
        </View>
    </ScrollView>

  )

}

export default ItemDetail

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        width:"100%",
    },
    main: {
        width:"100%",
        padding: 20,
        backgroundColor: colors.lighten,
      },
      goBack: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      buyNow: {
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
      },
      itemDetails: {
        marginTop: 20,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        fontSize: 16,
        marginBottom: 10,
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#27ae60',
      },
      image: {
        width: '100%', // Ocupa todo el ancho disponible
        aspectRatio: 1, // Mantiene la relación de aspecto de la imagen
        marginBottom: 10,
      },
      imageLandscape: {
        aspectRatio: 1,
        marginBottom: 10,
        alignSelf: 'center', // Centra la imagen horizontalmente
    },
})