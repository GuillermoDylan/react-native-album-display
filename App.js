import { Button, StyleSheet, SafeAreaView } from 'react-native';
import CoverGroup from './components/CoverGroup';
import albums from './sampleData/albums.json'
import React from 'react';


export default function App() {
  const [listView, setListView] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => setListView(!listView)} title="Change view" />
      <CoverGroup albums={albums} isListView={listView} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
