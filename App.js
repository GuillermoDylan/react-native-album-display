import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import albums from './sampleData/albums.json'
import React from 'react';
import CoverGroup from './components/CoverGroup';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CoverGroup albums={albums} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
