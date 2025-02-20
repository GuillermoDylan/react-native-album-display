import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CoverComponent from './CoverComponent';
import AlbumDetails from './AlbumDetails';

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

    const [openModal, setOpenModal] = React.useState(false);
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            {openModal == false ? (
                <ScrollView
                    contentContainerStyle={isListView ? styles.scrollViewList : styles.scrollView}
                    horizontal={isListView}>
                    {albums.map((album, index) => (
                        <View key={index}>
                            <CoverComponent album={album} onPress={() => { setOpenModal(true); setSelectedAlbum(album) }} key={index} />
                        </View>
                    ))}
                </ScrollView>
            ) :
                <AlbumDetails album={selectedAlbum} close={() => setOpenModal(false)} />}
        </SafeAreaView>
    );
};

export default CoverGroup;