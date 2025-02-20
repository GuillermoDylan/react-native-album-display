import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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

const CoverGroup = ({ albums, isListView }) => {

    return (
        <SafeAreaView style={[styles.container, isListView ? styles.scrollViewList : styles.scrollView]}>
            <ScrollView
                contentContainerStyle={isListView ? null : styles.scrollView}
                horizontal={isListView}
            >
                {albums.map((album, index) => (
                    <View key={index}>
                        <CoverComponent imageUrl={album.coverUrl} onPress={album.onPress} key={index} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CoverGroup;