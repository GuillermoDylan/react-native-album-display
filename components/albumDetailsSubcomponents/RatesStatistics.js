import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Button } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const screenWidth = Dimensions.get('window').width;

const RatingHistogram = ({ ratings, setRatings }) => {
    const [userRating, setUserRating] = useState(null);
    const scaleAnim = useMemo(() => new Animated.Value(1), []);
    const ratingCounts = Array(11).fill(0);
    let totalRatings = 0;
    let sumRatings = 0;

    useEffect(() => {
        const totalRatings = ratings.length;
        const sumRatings = ratings.reduce((sum, rating) => sum + rating, 0);
        setDisplayValue(totalRatings > 0 ? (sumRatings / totalRatings).toFixed(2) : 'N/A');
    }, [ratings]);
    

    ratings.forEach(rating => {
        const index = Math.round(rating * 2);
        ratingCounts[index] += 1;
        sumRatings += rating;
        totalRatings += 1;
    });

    const averageRating = totalRatings > 0 ? (sumRatings / totalRatings).toFixed(2) : 'N/A';
    const [displayValue, setDisplayValue] = useState(averageRating);
    const [selectedStarValue, setSelectedStarValue] = useState(0);

    const barWidth = (screenWidth - 40) / 11;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            const touchX = gestureState.moveX - 50;
            const index = Math.floor(touchX / barWidth);
            if (index >= 0 && index < ratingCounts.length) {
                setDisplayValue(ratingCounts[index]);
                setSelectedStarValue((index / 2).toFixed(1));
            }
        },
        onPanResponderRelease: () => {
            setDisplayValue(averageRating);
            setSelectedStarValue(0);
        },
    });

    const data = {
        labels: Array(11).fill(''),
        datasets: [{
            data: ratingCounts,
        }],
    };

    const animateRating = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            })
        ]).start();
    };

    const handleRatingChange = (newRating) => {
        setUserRating(newRating); 
        animateRating();
    
        setTimeout(() => {
            setRatings(prevRatings => {
                const filteredRatings = userRating !== null
                    ? prevRatings.filter((_, index) => index !== prevRatings.lastIndexOf(userRating))
                    : prevRatings;
    
                const updatedRatings = [...filteredRatings, newRating];
                updateAverageRating(updatedRatings);
                return updatedRatings;
            });
        }, 0);
    };
    
    
    const handleRemoveRating = () => {
        if (userRating !== null) {
            setUserRating(null);
    
            setTimeout(() => {
                setRatings(prevRatings => {
                    const filteredRatings = prevRatings.filter((_, index) => index !== prevRatings.lastIndexOf(userRating));
                    updateAverageRating(filteredRatings);
                    return filteredRatings;
                });
            }, 0);
        }
    };
    

    const updateAverageRating = (updatedRatings) => {
        const totalRatings = updatedRatings.length;
        const sumRatings = updatedRatings.reduce((sum, rating) => sum + rating, 0);
        setDisplayValue(totalRatings > 0 ? (sumRatings / totalRatings).toFixed(2) : 'N/A');
    };

    return (
        <View style={styles.container}>
            <View style={styles.userRatingContainer}>
                <StarRating
                    rating={userRating || 0}
                    onChange={handleRatingChange}
                    starSize={45}
                />
                <Animated.View style={[styles.userRatingValueWrapper, { transform: [{ scale: scaleAnim }] }]}>
                    <Text style={styles.userRatingValueNum}>{userRating || '-'}</Text>
                </Animated.View>
            </View>
            {userRating !== null && (
                <Button title="Eliminar rating" onPress={handleRemoveRating} />
            )}
            <View {...panResponder.panHandlers}>
                <BarChart
                    data={data}
                    width={screenWidth - 40}
                    height={100}
                    hideLegend
                    withInnerLines={false}
                    chartConfig={chartConfig}
                    fromZero
                    withHorizontalLabels={false}
                    withCustomBarColorFromData={false}
                />
            </View>
            <View style={styles.ratingNumAndStars}>
                <Text style={styles.averageRating}>{displayValue}</Text>
                <StarRating
                    rating={selectedStarValue}
                    starSize={20}
                    color={"#1f456e"}
                    onChange={() => { }}
                />
            </View>
        </View>
    );
};

const chartConfig = {
    backgroundGradientFrom: '#1c1c1c',
    backgroundGradientTo: '#1c1c1c',
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    barPercentage: 0.5,
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
    userRatingContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    userRatingValueWrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fdd835",
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userRatingValueNum: {
        fontSize: 21,
        fontWeight: "bold",
    },
    ratingNumAndStars: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 10,
    },
    averageRating: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e3f2fd',
    },
});

export default RatingHistogram;
