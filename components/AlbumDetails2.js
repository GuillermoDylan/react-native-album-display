import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AlbumBasicData from './albumDetailsSubcomponents/AlbumBasicData';

const { width, height } = Dimensions.get('window');

const AlbumDetails2 = ({ album }) => {
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(
      album.coverUrl,
      (width, height) => {
        setImgSize({ width, height }); // Corregido: setImgSize en vez de setSize
      },
      (error) => {
        console.error("Error loading image size:", error);
      }
    );
  }, [album.coverUrl]);

  // 📌 Ahora useMemo está dentro del componente y puede acceder a imgSize
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        topContainer: {
          flexDirection: 'row',
          minHeight: height * 0.15,
          maxHeight: height * 0.3,
          height: imgSize.height, // Usa imgSize para la altura dinámica
          backgroundColor: 'orange',
        },
      }),
    [imgSize]
  );

  return (
    <View style={styles.container}>
      <View style={dynamicStyles.topContainer}>
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
  },
  imageWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  cover: {
    width: '100%',
    height: 190,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
});

export default AlbumDetails2;
