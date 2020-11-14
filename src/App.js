/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './components/Header';
import Bio from './components/Bio';
import Description from './components/Description';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
        <ScrollView>
          <Header />
          <Bio />
          <Description />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
