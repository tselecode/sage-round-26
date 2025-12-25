import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput,Button } from 'react-native';
import { useState } from 'react';
export default function App() {
  const[name, setName]=useState()
  const[age, setAge]=useState()
  return <ScrollView>
    <View>

      <TextInput placeholder='Enter Full Name' 
      style={{borderWidth:2,padding:5,margin:10}}
      value={name}
      onChangeText={setName}  />
      <TextInput placeholder='age' 
      style={{borderWidth:2,padding:5,margin:10}}
      value={age}
      onChangeText={setAge}
      />
       <Button title='submit'
       onPress={()=>{
        alert(name,age)
       
       }}/>
       <Text>full name: {name}</Text>
       <Text>age: {age}</Text>
    </View>
  </ScrollView>
}
