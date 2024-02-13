import { View, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

export default function App() {

  return (

  <View style = {StyleSheet.container}> 
    <Home />
  </View>  
  );
}

const styles = StyleSheet.create({
  container: {

      flex: 1,
      width: '100%',
      paddingHorizontal: 10,
  }
})