import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

const MainNavigator = () => {
    const [user, setUser] = useState(null)
  return (
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})