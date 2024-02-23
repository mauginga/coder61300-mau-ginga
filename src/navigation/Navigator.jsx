import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native";

import Home from "../screens/Home";
import ItemListCategories from "../screens/ItemListCategories";
import ItemDetail from "../screens/ItemDetail";
import Header from "../components/Header";

const Navigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio" screenOptions={({route})=>({
                header: ()=>{
                    return(
                        <Header title = {
                            route.name === "Inicio" 
                            ? "Lista de Categorías" 
                            : route.name === "Categorías" 
                            ? route.params.category 
                            : "Detalle del Producto" }
                        />
                    )
                }
            })}>
                <Stack.Screen name="Inicio" component={Home} />
                <Stack.Screen name="Detalle del Producto" component={ItemDetail}/> 
                <Stack.Screen name="Categorías" component={ItemListCategories}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

};
export default Navigator;