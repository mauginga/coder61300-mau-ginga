import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import ItemListCategories from './src/screens/ItemListCategories';
import { fonts } from './src/global/fonts';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("");

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

  return (
    <>
     <View style = {styles.container}> 
      <StatusBar style="auto" />
        {categorySelected
        ?(
          <ItemListCategories category={categorySelected} setCategorySelected={setCategorySelected}    
        />)
        :(
          <Home setCategorySelected={setCategorySelected}  />
        )}
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
  }
})