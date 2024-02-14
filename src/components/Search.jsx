import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../global/colors'
import { AntDesign, Entypo} from '@expo/vector-icons'

const Search = ({onSearch}) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");


    const search = () => {
        const expresion = /\d/;
        if(expresion.test(input)){
            setError("Only search letters");
        } else {
            setError("");
            onSearch(input)
        }
    }
    const removeInput = () => {
        setInput("");
        setError("")
    }

  return (
    <View style = {styles.container}>
        <View style = {styles.inputContainer}>
            <TextInput
                style = {styles.input}
                value = {input}
                onChangeText = {setInput}
                placeholder='Busca tu producto...'
            />
            <Pressable onPress ={search}>
                <AntDesign name="search1" size = {25} color = "black" />
            </Pressable>
            <Pressable onPress ={removeInput}>
                <Entypo name="circle-with-cross" size = {25} color = "black" />
            </Pressable>
            {error ? <Text style={styles.errorText} >{error}</Text>: null}
      </View>
    </View>
  )  
}

export default Search

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.petrol_100,

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.petrol_400,
        borderColor: colors.petrol_300,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
    },

    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: '#333',
    },
    errorText: {
        color: 'red',
    }
  });