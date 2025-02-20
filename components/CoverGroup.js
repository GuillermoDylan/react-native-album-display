import React, { useEffect } from 'react';
import { Button, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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
    }
});

const CoverGroup = ({ albums, isListView = false }) => {
    const [listView, setListView] = React.useState();
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    // Sincronizar listView con isListView si cambia
    useEffect(() => {
        setListView(isListView);
    }, [isListView]);

    return (
        <SafeAreaView style={styles.container}>
            {!openModal ? (
                <>
                    <Button onPress={() => setListView(!listView)} title="Change view" />
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                        horizontal={listView}>
                        {albums.map((album, index) => (
                            <View key={index}>
                                <CoverComponent album={album} onPress={() => { setOpenModal(true); setSelectedAlbum(album); }} />
                            </View>
                        ))}
                    </ScrollView>
                </>
            ) : (
                <AlbumDetails album={selectedAlbum} close={() => setOpenModal(false)} />
            )}
        </SafeAreaView>
    );
};

export default CoverGroup;
