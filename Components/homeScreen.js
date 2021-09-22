import React,{useState} from 'react';
import {Text,View,Button,TextInput,StyleSheet} from 'react-native';

const data={
  'name':'saiteja',
  'age':21,
  'city':'tadepalligudem'
}
function HomeScreen({navigation}) {
  const [data,setData]=useState({
    'name':'',
    'age':'',
    'city':''
  })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff' }}>
        <Text style={{fontWeight: "bold", fontSize:24}}>Personal Details</Text>
        <TextInput
          value={data.name}
          onChangeText={(username) => setData({...data,name:username})}
          placeholder={'Enter Name'}
          style={styles.inputStyle}
        />
        <TextInput
          value={data.age}
          onChangeText={(username) => setData({...data,age:username})}
          placeholder={'Enter Age'}
          keyboardType="numeric"
          style={styles.inputStyle}
        />
        <TextInput
          value={data.city}
          onChangeText={(username) => setData({...data,city:username})}
          placeholder={'Enter City'}
          style={styles.inputStyle}
        />
        
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail',{'data':data})}
      />
      </View>
    );
  }

  const styles=StyleSheet.create({
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'gray',
    },
  })

  export default HomeScreen;
