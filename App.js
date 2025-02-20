import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CoverComponent from './components/CoverComponent';
import CoverGroup from './components/CoverGroup';

import albums from './sampleData/albums.json'

// <CoverComponent imageUrl={"https://placehold.co/400x400.png"} onPress={() => {}}/>
import AlbumDetails from './components/AlbumDetails';

export default function App() {

  const items = albums.map((album) => ({
    ...album,
    onPress: () => { },
  }));


  return (
    /*<View style={styles.container}>
      <Text>Covers</Text>
      <CoverGroup albums={items} isListView={false} />
    </View>*/
    <View style={styles.container}>
      <AlbumDetails album={albums.at(3)}/>
    </View>
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
