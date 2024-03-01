import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const onSubmit = ()=>{
        triggerSignup ({email, password})

    }
  return (
    <View>
      <Text>Register</Text>
      <InputForm label = {'Email'} error={''} onChange={setEmail}/>
      <InputForm label = {'Password'} error={''} onChange={setPassword} isSecure={true}/>
      <InputForm label = {'confirmPassword'} error={''} onChange={setConfirmPassword}isSecure={true}/>

      <SubmitButton title ={'Register'} onPress ={onSubmit}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})