import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import FadeInView from './animations/FadeInView';

const CoverComponent = ({ album, onPress }) => {
    const [scaleAnim] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onMouseEnter={handlePressIn}
            onMouseLeave={handlePressOut}
            disabled={!album?.coverUrl}
        >
            {album?.coverUrl ? (
                <Animated.Image
                    source={{ uri: album.coverUrl }}
                    style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
                    resizeMode="cover"
                />
            ) : (
                <FadeInView>
                    <Animated.Image
                        style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
                        resizeMode="cover"
                    />
                </FadeInView>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
        margin: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: "#293133",
    },
});

export default CoverComponent;