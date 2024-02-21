import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import {NavigationContainer} from "@react-navigation/native";
import ProductItem from "../components/ProductItem";

const Navigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ProductItem" component={ProductItem}/> 
                <Stack.Screen name="ItemListCategories" component={ItemListCategories}/>
            </Stack.Navigator>
        </NavigationContainer>
                    //    /* /*cambiar por ItemDetail-hacer componente*/ */
    )

};
export default Navigator;