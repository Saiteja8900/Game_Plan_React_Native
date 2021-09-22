import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

function DetailScreen({route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.heading}>Detail Screen</Text>
        <Text style={styles.text}>Name:{route.params.data.name}</Text>
        
        <Text style={styles.text}>Age:{route.params.data.age}</Text>
        
        <Text style={styles.text}>City:{route.params.data.city}</Text>
      </View>
    );
  }
  const styles=StyleSheet.create({
        'text':{
          fontWeight: "bold", fontSize:24,alignItems:'baseline'
        },
        'heading':{
          fontWeight: "bold", fontSize:40
        }

  })

  export default DetailScreen;
