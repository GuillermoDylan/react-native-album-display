import React from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import CoverComponent from './CoverComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    scrollViewList: {
        flexDirection: 'column',
    },
});

const CoverGroup = ({ items, isListView }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={isListView ? styles.scrollViewList : styles.scrollView} 
                horizontal={isListView}
            >
                {items.map((item, index) => (
                    <View key={index}>
                        <CoverComponent imageUrl={item.imageUrl} onPress={item.onPress} key={index} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CoverGroup;