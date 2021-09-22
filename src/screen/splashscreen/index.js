import React from "react";
import {ImageBackground,Image,View,StyleSheet} from 'react-native';
import styles from './style'
import logo from '../../utility/icons'

function Splash({navigation}){
    setTimeout(()=>{
        navigation.replace('Login');
    },3000);
    return(
        <View style={styles.container}>
        <Image
            style={styles.logo}
            source={logo.application_logo}
        />
    </View>
    );
}
export default Splash;