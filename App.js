import { StyleSheet, SafeAreaView, Platform} from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';


import { colors } from './src/global/colors';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  // const [categorySelected, setCategorySelected] = useState("");
  // const [productDetailId, setProductDetailId] = useState(0);


  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

  return (
    <>
      <TabNavigator />
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

{/* <SafeAreaView style = {styles.container}> 
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
</SafeAreaView>  */}