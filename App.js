import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';

import ItemListCategories from './src/screens/ItemListCategories';
import Home from './src/screens/Home';
import ItemDetail from './src/screens/ItemDetail';
import Navigator from './src/navigation/Navigator';
import { colors } from './src/global/colors';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);


  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

  return (
    <>
     <SafeAreaView style = {styles.container}> 
      <StatusBar style="auto" />
        {productDetailId ? (
        <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId} /> 
        ): categorySelected?(
          <ItemListCategories 
          category={categorySelected} 
          setCategorySelected={setCategorySelected}
          setProductDetailId={setProductDetailId}    
        />):(
          <Home setCategorySelected={setCategorySelected}  />
        )}
      </SafeAreaView> 
      {/* <Navigator /> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      flex: 1,
      backgroundColor: colors.lighten,
      alignItems: 'center',
      paddingTop: Platform.OS ==='android' ? Constants.statusBarHeight : 0,

  }
})