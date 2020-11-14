import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 30,
      padding: 2,
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
          <Text style={styles.title}>Descripción:</Text>
          <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
        </View>
        </View>
        );
    }
   
}
    
