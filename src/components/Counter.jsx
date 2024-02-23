import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {increment, decrement, incrementByAmount, reset} from "../features/counter/counterSlice"
import { useDispatch, useDispatchseDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=>state.counterReducer.value);
    const dispatch = useDispatch()
  return (
    <View style={styles.container}>
        <View></View>
      <Text>Counter</Text>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})