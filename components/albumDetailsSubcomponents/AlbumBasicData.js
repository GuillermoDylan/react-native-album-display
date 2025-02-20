import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AlbumBasicData = ({ album }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.albumTitle}>{album.title}</Text>
      <Text style={styles.artist}>{album.artist}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  albumTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  artist: {
    fontSize: 17,
    color: '#666',
  },
});

export default AlbumBasicData;
