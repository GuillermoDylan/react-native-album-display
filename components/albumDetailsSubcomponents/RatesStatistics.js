import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const screenWidth = Dimensions.get('window').width;

const RatingHistogram = ({ ratings }) => {
  const ratingCounts = Array(11).fill(0);
  let totalRatings = 0;
  let sumRatings = 0;

  ratings.forEach(rating => {
    const index = Math.round(rating * 2);
    ratingCounts[index] += 1;
    sumRatings += rating;
    totalRatings += 1;
  });

  const averageRating = totalRatings > 0 ? (sumRatings / totalRatings).toFixed(1) : 'N/A';
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

  return (
    <View style={styles.container}>
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
          onChange={() => {}}
        />
      </View>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
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
    fontWeight: 'bold'
  },
});

export default RatingHistogram;
