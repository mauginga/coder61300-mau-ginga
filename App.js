import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Modal
} from "react-native";

import cartImage from '../bauma/assets/cart.png';
import baumaLogo from '../bauma/assets/bauma-logo.png';
import RemoveModal from './src/components/RemoveModal';


// const DATA = [
//   {
//     name: "Motor Diesel",
//     id: 1,
//   },
//   {
//     name: "Injector",
//     id: 2,
//   },
//   {
//     name: "Resorte",
//     id: 3,
//   },
// ];



export default function App() {
  // useState y use Effect hooks para controlar el estado de la aplicacion y el ciclo de vida del componente
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  {/*  Funcion que agrega un item utilizando un Desparramar propiedades dentro de */}
  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
  }

  return (
    <View style={styles.container}>
      {/* El StatusBar controla la barra de estado del dispositivo */}
      <StatusBar style="auto" />

      {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
      <RemoveModal
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
      />
      <View style = {styles.header}>
      <Image style = {styles.image} source={baumaLogo}/>
        <Text>Compra de Insumos Petroleros</Text>
        <Image style = {styles.image} source={cartImage}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
            <Text style={{ fontSize: 40 }}>+</Text>
        </Pressable>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{ width: 400, flexDirection: "row" }}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Pressable onPress={handleAddCounter}>
        <Text style= {{fontSize: 20}}>+</Text>
      </Pressable>
      <Text style= {{fontSize: 20}}>Cantidad : {counter}</Text>
      <Text>Valor del input: {inputValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#356474", // Color principal (similar al petróleo)
    flex: 1,
    paddingHorizontal: 14,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    marginTop: 10
  },
  image: {
    width: 50,
    height: 50,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#45AAB8", // Color del texto 
    padding: 4,
  },
  input: {
    borderColor: "#35424A", // Color del borde del input (similar al petróleo)
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    width: "90%",
    color: "#FFF", // Color del texto dentro del input (similar al petróleo)
  },
  inputContainer: { flexDirection: "row" },
});
