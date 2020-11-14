import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 30,
      padding: 2,
     // flexDirection: 'row',
     // justifyContent: 'space-between',
     // flexDirection: 'row',
    },
    textContainer: {
      flexDirection: 'column',
      marginBottom: 5,
    },
    title: {
      color: '#A9A9A9',
      fontSize: 20,
    },
    subtitle: {
      color:'black',
      fontSize: 12,
    },
});
export default class Bio extends Component {
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.textContainer}>
          <Text style={styles.title}>Bio:</Text>
          <Text style={styles.subtitle}>Desarrollador informático</Text>
        </View>
        </View>
        );
    }
   
}
    
