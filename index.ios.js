/* eslint-disable*/
/**
 * Sample React Native App
 * https://github.com/pandaface2016/pfrn.git
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
import Immutable from './util/immutable.js';

import Discover from './page/discover/discover.js';
import Favorites from './page/favorites/favorites.js';
import ImageView from './component/ImageView/ImageView.js';

import Api from './action/api.js';

class pandaface extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Immutable.fromJS({
                selectedTab: 'discover',
                discoverList: [],
                imageView: {
                    status: 'hide',
                    url: ''
                }
            })
        }

        this.initImageView = this.initImageView.bind(this);
        this.tabSwitch = this.tabSwitch.bind(this);
        this.updateDiscover = this.updateDiscover.bind(this);
    }

    componentWillMount() {
        // 设置StatusBar状态
        StatusBarIOS.setHidden(false);
        StatusBarIOS.setStyle('light-content');

        // 更新discover数据
        this.updateDiscover();
    }

    // 初始化图片展示浮层状态
    initImageView(status, url) {
        var imageView = this.state.data.get('imageView').toJS();
        imageView.status = status || 'hide';
        imageView.url = url || '';
        this.setState({
            data: this.state.data.set('imageView', Immutable.fromJS(imageView))
        });
    }

    // tab切换
    tabSwitch(type) {
        this.setState({
            data: this.state.data.set('selectedTab', type)
        });
    }

    // 点击“发现"按钮
    updateDiscover() {
        var self = this;
        Api.getDiscoverList(function (error, data) {
            // console.log(error, data);
            if (!error) {
                self.setState({
                    data: self.state.data.set('discoverList', Immutable.fromJS(data))
                });
            }
        });
    }

    render() {
        var self = this;
        var selectedTab = self.state.data.get('selectedTab');
        var imageView = self.state.data.get('imageView').toJS();
        var discoverList = self.state.data.get('discoverList').toJS();
        return (
            <View style={{flex:1}}>
                <TabBarIOS
                    tintColor="#09bb07"
                    barTintColor="#f6f6f7"
                    translucent={false}>
                    <TabBarIOS.Item
                        title="发现"
                        icon={require('./img/mummyIcon.png')}
                        selected={selectedTab === 'discover'}
                        // badge={6}
                        onPress={() => {
                            this.tabSwitch('discover');
                            this.updateDiscover();
                        }}>
                        <View style={styles.container}>
                            <Discover
                                list={discoverList}
                                initImageView={this.initImageView} />
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="收藏"
                        icon={require('./img/favoritesIcon.png')}
                        selected={selectedTab === 'favorites'}
                        onPress={() => {
                            this.tabSwitch('favorites');
                        }}>
                        <View style={styles.container}>
                            <Favorites></Favorites>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
                {(() => {
                    if (imageView.status === 'show') {
                        return (
                            <ImageView 
                                url={imageView.url}
                                initImageView={this.initImageView}/>  
                        )
                    }
                })()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 49
    }
});

AppRegistry.registerComponent('pandaface', () => pandaface);
