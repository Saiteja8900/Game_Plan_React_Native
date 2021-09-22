import React from "react";
import {ImageBackground,Image,View,StyleSheet} from 'react-native';

var logo=require('../application_logo.png');
function Splash({navigation}){
    setTimeout(()=>{
        navigation.replace('Login');
    },5000);
    return(
        <View style={styles.container}>
        <Image
            style={styles.logo}
            source={logo}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
      width: 300,
      height: 400,
      resizeMode: 'contain'
    },
  });
export default Splash;