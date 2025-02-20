import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TrackList = ({ tracks }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={[styles.headerText, styles.trackNumber]}>#</Text>
            <Text style={[styles.headerText, styles.trackName]}>Title</Text>
            <Text style={[styles.headerText, styles.trackDuration]}>Duration</Text>
        </View>
        <FlatList
            data={tracks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
            <View style={styles.trackItem}>
                <TouchableOpacity onPress={() => toggleFavorite(index)}>
                  <FontAwesome 
                    name={favorites[index] ? "heart" : "heart-o"} 
                    size={20} 
                    color={favorites[index] ? "red" : "gray"} 
                  />
                </TouchableOpacity>
                <Text style={styles.trackNumber}>{index + 1}.</Text>
                <Text style={styles.trackName}>{item.name}</Text>
                <Text style={styles.trackDuration}>{item.duration}</Text>
            </View>
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  trackNumber: {
    width: 40,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trackName: {
    flex: 2,
    fontSize: 16,
    textAlign: 'left',
  },
  trackDuration: {
    width: 60,
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});

export default TrackList;
