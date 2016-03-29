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
    TabBarIOS,
    StatusBarIOS,
    View
} from 'react-native';
import Discover from './page/discover/discover.js';
import Favorites from './page/favorites/favorites.js';
import PictureOverlay from './page/pictureOverlay/pictureOverlay.js';

class pandaface extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'discover'
        }
    }

    componentWillMount() {
        StatusBarIOS.setStyle('light-content');
        // StatusBarIOS.setHidden(true);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TabBarIOS
                    tintColor="#09bb07"
                    barTintColor="#f6f6f7"
                    translucent={false}>
                    <TabBarIOS.Item
                        title="发现"
                        icon={require('./img/mummyIcon.png')}
                        selected={this.state.selectedTab === 'discover'}
                        // badge={6}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'discover',
                            });
                        }}>
                        <View style={styles.container}>
                            <Discover></Discover>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="收藏"
                        icon={require('./img/favoritesIcon.png')}
                        selected={this.state.selectedTab === 'favorites'}
                        onPress={() => {
                            this.setState({
                              selectedTab: 'favorites',
                            });
                        }}>
                        <View style={styles.container}>
                            <Favorites></Favorites>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 49
    },
    pictureOverlay: {

    }
});

AppRegistry.registerComponent('pandaface', () => pandaface);
