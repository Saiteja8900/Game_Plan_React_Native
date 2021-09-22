import { StyleSheet } from "react-native"
import color1 from './../../utility/color'
export default StyleSheet.create({
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
      borderColor:color1.TEXT_SECONDARY,
      marginTop:5,
      borderRadius:5,
      backgroundColor:'white',
      marginLeft:210,
      alignItems:'center',
      paddingVertical:5,
  },
  forgotContainer:{
    fontWeight:'bold' ,color: color1.TEXT_SECONDARY,fontSize:18,
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
  backgroundColor: color1.TEXT_SECONDARY,
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
   textAlign:'center'

 },
 iconContainer:{
   alignItems:'center',
   justifyContent:'center',
   paddingRight:15
 }
  })

