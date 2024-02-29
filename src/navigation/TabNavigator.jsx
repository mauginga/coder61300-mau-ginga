import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from "../global/colors";
import { Entypo } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";


const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator  
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
            >
                <Tab.Screen  
                name = "ShopStack" 
                component={ShopStack} 
                options={{
                    tabBarIcon : ({ focused }) => {
                        return(
                            <View style = {styles.tabContainer}>
                                <Entypo name="shop" size={30} color={ focused ? "grey" : "black" }/>
                                <Text style = {{color: focused? "grey" : "black"}}>Shop</Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen  
                name = "CartStack" 
                component={CartStack}
                options={{
                    tabBarIcon : ({ focused }) => {
                        return(
                            <View style = {styles.tabContainer}>
                                <Entypo name="shopping-cart" size={30} color={ focused ? "grey" : "black" } />
                                <Text style = {{flexDirection:"row", color: focused? "gray" : "black"}}>Cart</Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen  
                name = "OrdersStack" 
                component={OrdersStack}
                options={{
                    tabBarIcon : ({ focused }) => {
                        return(
                            <View style = {styles.tabContainer}>
                                <Entypo name="list" size={30} color={ focused ? "grey" : "black" } />
                                <Text style = {{flexDirection:"row", color: focused? "gray" : "black"}}>Orders</Text>
                            </View>
                        );
                    },
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.petrol_300,
        height: 70,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 3,
        left: 10,
        right: 10,
        borderRadius: 12,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})