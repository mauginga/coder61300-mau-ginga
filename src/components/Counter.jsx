import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {increment, decrement, incrementByAmount, reset} from "../features/counter/counterSlice"
import {useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native'

const Counter = () => {
    const count = useSelector((state)=>state.counterReducer.value);
    const dispatch = useDispatch()
    const [inputToAdd, setInputAdd] = useState ("");
    const confirmAdd =()=> {
      dispatch(incrementByAmount(inputToAdd))
    }

  return (
    <View style={styles.container}>
        <View style = {styles.buttonsContainer}>
          <Pressable onPress={()=>dispatch(decrement())} style = {styles.button}>
            <Text style = {styles.buttonText}> - </Text>
          </Pressable>
          <Text style = {styles.span}> {count} </Text>
          <Pressable onPress={()=>dispatch(increment())} style = {styles.button}>
            <Text style = {styles.buttonText}> + </Text>
          </Pressable>
        </View>
        <View style = {styles.buttonsContainer}>
          <TextInput
            placeholder ="Cantidad a aumentar"
            value = {inputToAdd.toString()}
            onChangeText={ text => setInputAdd(Number(text))}
            style = {styles.spanInput}
          />
          <Pressable style = {styles.button} onPress = {confirmAdd}>
            <Text style = {styles.buttonText}> ADD </Text>
          </Pressable>
        </View>
        <Pressable onPress={()=>dispatch(reset())} style = {styles.button}>
            <Text style = {styles.buttonText}> RESET </Text>
        </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  span: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  spanInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    marginRight: 10,
    fontFamily: "CabinBold",
  },
});
