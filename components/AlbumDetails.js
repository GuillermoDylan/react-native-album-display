import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AlbumBasicData from './albumDetailsSubcomponents/AlbumBasicData';

const { width, height } = Dimensions.get('window');

const imgMaxSize = 190;

const AlbumDetails = ({ album }) => {
  const [imageStyle, setImageStyle] = useState({ width: '100%', height: imgMaxSize });

  useEffect(() => {
    Image.getSize(album.coverUrl, (imgWidth, imgHeight) => {
      if (imgHeight > imgWidth) {
        setImageStyle({ width: imgMaxSize, height: '100%' });
      } else {
        setImageStyle({ width: '100%', height: imgMaxSize });
      }
    });
  }, [album.coverUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: album.coverUrl }} style={[styles.cover, imageStyle]} />
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
    height: imgMaxSize,
    backgroundColor: "orange"
  },
  imageWrapper: {
    width: 190,
    height: '100%',
    justifyContent: 'flex-end',
  },
  cover: {
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default AlbumDetails;
