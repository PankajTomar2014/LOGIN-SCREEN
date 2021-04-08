
import React,{useState} from 'react';
import { View, AsyncStorage,KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, ActivityIndicator  } from 'react-native';
import ApiRequest from '../Envirment/api'
const LoginScreen = ({navigation}) => {

  const [number,setNumber] = useState('')
  const [password,setPassword] = useState('')
  const [erroNumber,setErroNumber] = useState('')
  const [erroPassword,setErroPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const handleSubmit = async( )=>{
    setLoading(true)
    if(number < 10){
      setErroNumber("enter 10 digit number");
      setLoading(false)
    }
    if(password ===''){
      setErroPassword("enter password.");
      setLoading(false)
    }
   else{
     try{
       const phone = number 
        let user = await ApiRequest('/auth/signIn', {phone, password});
        console.log('user data login==->',user)
        await AsyncStorage.setItem('userInfo',JSON.stringify(user));  
         navigation.navigate('StoriesList');
          setLoading(false)    
     }
     catch(error){
      let message = error.message;      
      console.log('/auth/signIn===>', error);
      alert(message)
      setLoading(false)
     }
     
   }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Login</Text>
            <TextInput 
            keyboardType='numeric' 
            placeholder="Number" 
            maxLength={10}
            placeholderTextColor='gray'
            style={styles.textInput} 
            onChangeText={(number)=>setNumber(number)}
            />
            <Text style={styles.errMsg}>{erroNumber}</Text>
            <TextInput 
            keyboardType='default' 
            placeholder="Password" 
            placeholderTextColor='gray'
            style={styles.textInput} 
            onChangeText={(password)=>setPassword(password)}
            />
            <Text style={styles.errMsg}>{erroPassword}</Text>
          <View style={styles.btnContainer}>
            <Button 
            isLoading={loading ? setLoading(true):null } 
            title="Submit" 
            color='gray' 
            onPress={() => handleSubmit()} 
            />
          </View>
          {loading?
            <ActivityIndicator color ='green' size={'large'}/>
            : null
          }
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errMsg:{color:'red',
  fontWeight:"bold"
},
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    color:'gray',
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,    
  },
  btnContainer: {
    backgroundColor: "gray",
    // marginTop: 12,
    height: 40,
    width:'100%',
    borderRadius:10,
  }
});

export default LoginScreen;