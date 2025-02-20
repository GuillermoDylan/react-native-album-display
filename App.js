import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CoverComponent from './components/CoverComponent';
import CoverGroup from './components/CoverGroup';

import albums from './sampleData/albums.json'

import AlbumDetails from './components/AlbumDetails';

export default function App() {

  return (
    <View style={styles.container}>
      <CoverGroup albums={albums} isListView={false} />
    </View>
    /*<View style={styles.container}>
      <AlbumDetails album={albums.at(0)}/>
    </View>*/
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
