import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const CoverComponent = ({ imageUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image defaultSource={'https://placehold.co/400x400.png'} source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
        margin: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});

export default CoverComponent;