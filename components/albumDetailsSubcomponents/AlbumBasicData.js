import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const getFontSize = (text, baseSize) => {
  return text.length > 20 ? baseSize - 5 : text.length > 7 ? baseSize - 2 : baseSize;
};

const AlbumBasicData = ({ album }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.albumTitle, { fontSize: getFontSize(album.title, 25) }]}>{album.title}</Text>
      <Text style={[styles.artist, , { fontSize: getFontSize(album.artist, 25) }]}>{album.artist}</Text>
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
    color: '#fff',
  },
  artist: {
    fontSize: 17,
    color: '#fa586a',
    textDecorationLine: 'underline',
  },
});

export default AlbumBasicData;
