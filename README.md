# react-native-album-display
This is a React Native component to display information about a music album.

*Take in mind this package is designed to be used for Mobile development (eg: using expo)*

It allows displaying the components on a grid or on a list using the following component:

```JS
var listView = true; // This would display it as a list
<CoverGroup albums={albums} isListView={listView} />

var listView = false; // This would display it as a listgrid
<CoverGroup albums={albums} isListView={listView} />
```

The `AlbumDetails` component recieves an `album`, which is a list of items containing the information of the album, that is:
- **coverUrl**: The Album cover as a URL or path to the image
- **title**: The title of the album as a String
- **artist**: The name of the artistV
- **tracklist**: An array of songs with the following attributes:
    - **name**: Title of the song
    - **duration**: Following format mm:ss

For further information check an example at [albums.json](/sampleData/albums.json)

For further information contact the authors:
- [Guillermo Dylan Carvajal Aza](mailto:guille@carvajal.es)
- [Diego Moragón Merallo]()