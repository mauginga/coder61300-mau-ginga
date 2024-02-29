import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'

import orders from '../data/orders.json'

const Orders = () => {
  return (
    <View>
      <FlatList
      data = {orders}
      renderItem={({item})=><OrderItem item={item} /> } 
      keyExtractor={(order)=>order.id}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})