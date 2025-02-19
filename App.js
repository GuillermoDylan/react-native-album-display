import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CoverComponent from './components/CoverComponent';
import CoverGroup from './components/CoverGroup';

// <CoverComponent imageUrl={"https://placehold.co/400x400.png"} onPress={() => {}}/>
import AlbumDetails2 from './components/AlbumDetails2';

export default function App() {
  const items = Array.from({ length: 10 }, (_, index) => ({
    imageUrl: "https://placehold.co/400x400.png",
    onPress: () => {},
  }));

  return (
    <View style={styles.container}>
      <AlbumDetails2 album={{ coverUrl: 'https://placehold.co/400x400.png', title: 'Thriller', artist: 'Michael Jackson' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
