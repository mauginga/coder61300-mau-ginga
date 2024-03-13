import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'

const Login = ({navigation}) => {

    const onChange = ()=>{

    }
  return (
    <View>
      <Text>Login</Text>
      <InputForm label = {'Email'} error={''} onChange={onChange}/>
      <InputForm label = {'Password'} error={''} onChange={onChange}/>
      <SubmitButton onPress={onChange} title="Send" />
      <Pressable onPress ={()=>navigation.navigate('SignUp')}>
        <Text>New user? Sign up</Text>
      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
// // import React, { useState } from 'react';
// // import { Pressable, StyleSheet, Text, View } from 'react-native';
// // import { signInWithEmailAndPassword } from '../firebase/auth';
// // import InputForm from '../components/InputForm';
// // import SubmitButton from '../components/SubmitButton';
// // import { auth } from '../firebase'; // Importa la instancia de Firebase que has creado

// // const Login = ({ navigation }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const onChangeEmail = (text) => setEmail(text);
// //   const onChangePassword = (text) => setPassword(text);

// //   const handleLogin = async () => {
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       console.log('User logged in:', user.uid);
// //       // Aquí puedes redirigir a la siguiente pantalla o hacer cualquier otra acción después del login
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //       // Aquí puedes mostrar un mensaje de error al usuario
// //     }
// //   };

// //   return (
// //     <View>
// //       <Text>Login</Text>
// //       <InputForm label="Email" value={email} error={''} onChange={onChangeEmail} />
// //       <InputForm label="Password" value={password} error={''} onChange={onChangePassword} />
// //       <SubmitButton onPress={handleLogin} title="Send" />
// //       <Pressable onPress={() => navigation.navigate('SignUp')}>
// //         <Text>New user? Sign up</Text>
// //       </Pressable>
// //     </View>
// //   );
// // };

// // export default Login;

// // const styles = StyleSheet.create({});
