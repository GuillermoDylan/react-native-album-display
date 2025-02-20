import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, FlatList } from 'react-native';
import { Divider } from '@rneui/themed';
import StarRating from 'react-native-star-rating-widget';
import AlbumBasicData from './albumDetailsSubcomponents/AlbumBasicData';
import AlbumTracklist from './albumDetailsSubcomponents/AlbumTracklist';
import RatesStatistics from './albumDetailsSubcomponents/RatesStatistics';

const { width, height } = Dimensions.get('window');

const AlbumDetails = ({ album }) => {
  
  const scrollY = useMemo(() => new Animated.Value(0), []);
  const [ratings, setRatings] = useState([5, 4.5, 3, 4, 2.5, 5, 4, 3.5, 4.5, 2, 1, 3, 5, 4.5, 4, 0.5]);

  const sampleTracks = [
    { name: "Track One", duration: "3:45" },
    { name: "Track Two", duration: "4:12" },
    { name: "Track Three", duration: "2:58" },
    { name: "Track Four", duration: "5:03" },
    { name: "Track Five", duration: "3:30" },
  ];

  const initialTopContainerHeight = height * 0.4;
  const compressedTopContainerHeight = height * 0.1;

  const topContainerHeight = scrollY.interpolate({
    inputRange: [0, initialTopContainerHeight - compressedTopContainerHeight],
    outputRange: [initialTopContainerHeight, compressedTopContainerHeight],
    extrapolate: 'clamp',
  });

  const imageWrapperFlex = scrollY.interpolate({
    inputRange: [0, initialTopContainerHeight - compressedTopContainerHeight],
    outputRange: [1.5, 0.2],
    extrapolate: 'clamp',
  });

  const textScale = scrollY.interpolate({
    inputRange: [0, initialTopContainerHeight - compressedTopContainerHeight],
    outputRange: [1, 0.6],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.topContainer, { height: topContainerHeight }]}> 
        <Image source={{ uri: album.coverUrl }} style={styles.backgroundImage} blurRadius={10} />
        <Animated.View style={[styles.imageWrapper, { flex: imageWrapperFlex }]}> 
          <Image source={{ uri: album.coverUrl }} style={styles.cover} />
        </Animated.View>
        <Animated.View style={[styles.textContainer, { transform: [{ scale: textScale }] }]}> 
          <AlbumBasicData album={album} />
        </Animated.View>
      </Animated.View>
      <Animated.FlatList
        data={[{}]}
        renderItem={() => (
          <View>
            <Divider style={{ marginVertical: 10 }} />
            <RatesStatistics ratings={ratings} setRatings={setRatings} />
            <Divider style={{ marginVertical: 10 }} />
            <AlbumTracklist tracks={sampleTracks} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ], { useNativeDriver: false })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#1c1c1c'
  },
  topContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.3,
  },
  imageWrapper: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  cover: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default AlbumDetails;
