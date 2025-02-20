import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CoverComponent from './components/CoverComponent';
import CoverGroup from './components/CoverGroup';

// <CoverComponent imageUrl={"https://placehold.co/400x400.png"} onPress={() => {}}/>
import AlbumDetails from './components/AlbumDetails';

export default function App() {
  const covers = ["https://cdn-images.dzcdn.net/images/cover/ba6a493f64b09765e7786b358bc3fd3f/0x1900-000000-80-0-0.jpg",
    "https://cdn-images.dzcdn.net/images/cover/df3dc0be9072fe94a7729e0fa39d59dd/0x1900-000000-80-0-0.jpg",
    "https://www.udiscovermusic.com/wp-content/uploads/2013/04/ten-summoners-tales.jpg",
    "https://m.media-amazon.com/images/I/713rQXjrBtL._UF894,1000_QL80_.jpg",
    null
  ]
  const items = covers.map((cover) => ({
    imageUrl: cover,
    onPress: () => { },
  }));

  return (
    <View style={styles.container}>
      <Text>Covers</Text>
      <CoverGroup items={items} isListView={false} />
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
