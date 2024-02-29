import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const InputForm = ({label, error, onChange, isSecure}) => {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
        <TextInput  style={styles.input} calue ={input} onChangeText={onChangeText} secureTextEntry={isSecure}/>
        {error ? <Text style = {styles.error}>{error}</Text> :null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({})