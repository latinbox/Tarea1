import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 30,
    padding: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  texContainer: {
    flexDirection: 'column',
   // marginBottom: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color:'white',
    fontSize: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  
  },
 
});

export default class Counter extends Component {
  constructor(props) {
    super(props);

    
  }



  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Camilo González</Text>
          <Text style={styles.subtitle}>31</Text>
        </View>
        <View>
        <Image
         style={styles.image}
        resizeMode="cover" 
        source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} 
        /> 
        </View>
        </View>
        
    );
  }
}

