import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

    useEffect(() => {
        const fadeIn = () => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => fadeOut());
        };

        const fadeOut = () => {
            Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => fadeIn());
        };

        fadeIn();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};

const CoverComponent = ({ imageUrl, onPress }) => {
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
            disabled={!imageUrl}
        >
            {imageUrl ? (
                <Animated.Image
                    source={{ uri: imageUrl }}
                    style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
                    resizeMode="cover"
                />
            ) : (
                <FadeInView>
                    <Animated.Image
                        source={{ uri: imageUrl }}
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
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
});

export default CoverComponent;