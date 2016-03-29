/* eslint-disable*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    StatusBarIOS,
    View,
    Dimensions
} from 'react-native';

var WINDOW_HEIGHT = Dimensions.get('window').height;
var WINDOW_WIDTH = Dimensions.get('window').width;

export default class PictureOverlay extends Component {

    render() {

        return (
            <View style={styles.container}></View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0
    }
});