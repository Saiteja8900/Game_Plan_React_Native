import React,{useState} from "react";
import { TextInput,Text, View,StyleSheet ,Button,Image,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';
import Cap from 'react-native-vector-icons/Entypo';
import styles from './style'
import logo from '../../utility/icons'

export default class loginScreen extends React.Component{
   constructor(){
     super();
     this.state={
       emailid:'',
       password:'',
       hidePass:true,
       hideRemember:true,
       emailError:'',
       passwordError:''
     }
   } 
   emailValidator(){
     if(this.state.emailid==""){
       this.setState({emailError:' Email Field Cannot Be Empty!'})
     }
     else{
      this.setState({emailError:''})
       
     }
   }
   passwordValidator(){
     if(this.state.password==""){
       this.setState({passwordError:'Password Field Cannot Be Empty!'})
     }
     else{
      this.setState({passwordError:''})
     }
   }
  render(){ return (
        
        <View style={styles.container}>
                <Image
            style={styles.logo}
            source={logo.application_logo}
        />

         <View style={styles.passwordContainer}>
          <TextInput
            value={this.state.emailid}
            onChangeText={(username) => this.setState({emailid:username})}
            placeholder={'Enter email_id'}
            placeholderTextColor="grey"
            style={styles.inputStyle}
            keyboardType="email-address"
            onBlur={()=>this.emailValidator()}
            />
         </View>
         <Text style={{color:"red"}}>{this.state.emailError}</Text>
        
          <View style={styles.passwordContainer}>
          <TextInput
            value={this.state.password}
            onChangeText={(username) =>this.setState({password:username})}
            placeholder={'Enter password'}
            placeholderTextColor="grey"
            secureTextEntry={this.state.hidePass ? true : false}
            style={styles.inputStyle}
            onBlur={()=>this.passwordValidator()}
          
             />
            
             <View style={styles.iconContainer}>
              <Icon  
              name={this.state.hidePass ? 'eye-off' : 'eye'}
              size={25}
              color="black"
              onPress={() => this.setState({hidePass:!this.state.hidePass})}
            />
            </View>
            </View>
            <Text style={{color:"red"}}>{this.state.passwordError}</Text>
        
             <TouchableOpacity style={styles.rememberContainer}>
          <Icons style={styles.icon2}
              name={this.state.hideRemember ? 'checksquare' : 'checksquareo'}
              size={25}
              color="red"
              onPress={() => this.setState({hideRemember:!this.state.hideRemember})}
            />
            <Text  style={{fontWeight:'bold' ,color: "red",fontSize:18 }}> REMEMBER ME</Text>
            </TouchableOpacity>
          <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Detail',{'data':this.state})}>
              <Text style={styles.text1}>LOGIN</Text>
          </TouchableOpacity>
          <Text  style={styles.forgotContainer}> FORGOT YOUR PASSWORD ?</Text>
          <View style = {styles.lineStyle} />
          <TouchableOpacity style={styles.universityContainer}>
          <View style={styles.viewContainerUniversity}>
          <Image source={logo.cap}  style={styles.imageContainerUniversity}/>

            <Text style={{fontWeight:'bold',color:'red',paddingLeft:20,fontSize:20}}>LOGIN USING UNIVERSITY ID </Text>
         </View>
         <Cap  name='chevron-thin-down' size={20} color="red"/>
       
         </TouchableOpacity>
        </View>
      );
    }}
  
   