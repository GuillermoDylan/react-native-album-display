import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AlbumBasicData from './albumDetailsSubcomponents/AlbumBasicData';

const { width, height } = Dimensions.get('window');

const AlbumDetails = ({ album }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: album.coverUrl }} style={styles.cover} />
        </View>
        <AlbumBasicData style={styles.textContainer} album={album} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  topContainer: {
    flexDirection: 'row',
    height: height * 0.3,
    backgroundColor: 'orange',
  },
  imageWrapper: {
    width: 190,
    justifyContent: 'flex-end',
  },
  cover: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'green',
  },
});

export default AlbumDetails;
