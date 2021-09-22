import React,{useState} from "react";
import { TextInput,Text, View,StyleSheet ,Button,Image,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';
import Cap from 'react-native-vector-icons/Entypo';
var logo=require('../src/assets/application_logo.png');

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
            source={logo}
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
        
             <View style={styles.rememberContainer}>
          <Icons style={styles.icon2}
              name={this.state.hideRemember ? 'checksquare' : 'checksquareo'}
              size={25}
              color="red"
              onPress={() => this.setState({hideRemember:!this.state.hideRemember})}
            />
            <Text  style={{fontWeight:'bold' ,color: "red",fontSize:18 }}> REMEMBER ME</Text>
            </View>
          <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Detail',{'data':this.state})}>
              <Text style={styles.text1}>LOGIN</Text>
          </TouchableOpacity>
          <Text  style={styles.forgotContainer}> FORGOT YOUR PASSWORD ?</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputStyle}
            />
            <Cap name="graduation-cap" size={40} style={{alignItems:'center',paddingRight:50}}/>
            <Text style={{paddingRight:40,fontWeight:'bold',color:'red'}}>LOGIN USING UNIVERSITY ID </Text>
            <Cap  name='chevron-thin-down' size={20}/>
         </View>
       
        </View>
      );
    }}
  
    const styles=StyleSheet.create({
      lineStyle:{
        backgroundColor: '#CBCBCB',
        marginTop:10,
        height: 2,
        width: 370
   },
        container: {
            flex:1,
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        },
     logo: {
      width: 200,
      height: 160,
      resizeMode: 'contain'
    },
    text1:{
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      
     },
    rememberContainer:{
        flexDirection:'row',
        borderColor:"#CBCBCB",
        marginTop:5,
        borderRadius:5,
        backgroundColor:'white',
        marginLeft:210,
        alignItems:'center',
        paddingVertical:5,
    },
    forgotContainer:{
      fontWeight:'bold' ,color: "red",fontSize:18,
      marginTop:20,
    },
   inputStyle: {
    flex:1,
    paddingLeft: 20,
    fontSize:16,
    paddingVertical: 10,
    color:'black',
    borderColor:"#CBCBCB",
  },

   buttonContainer:{
    backgroundColor: "#FF6666",
    paddingVertical: 15,
    paddingHorizontal: 140,
         borderRadius: 10,
         width:'90%'

   },
   passwordContainer:{
     flexDirection:'row',
     borderWidth:1,
     borderColor:"#CBCBCB",
     width:'90%',
     marginTop:10,
     borderRadius:5,
     backgroundColor:'white',

   },
   iconContainer:{
     alignItems:'center',
     justifyContent:'center',
     paddingRight:15
   }
    })
  
  