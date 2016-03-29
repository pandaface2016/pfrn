/* eslint-disable*/
/**
 * 我的收藏页面
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View
} from 'react-native';
import NavigationBar from '../../component/NavigationBar/NavigationBar.js';

export default class Favorites extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('render favorites');
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'收藏'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
