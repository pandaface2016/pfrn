/* eslint-disable*/
/**
 * 发现页面
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Text,
    Image,
    ScrollView
} from 'react-native';
import NavigationBar from '../../component/NavigationBar/NavigationBar.js';

var THUMB_URLS = [
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xooqkmj305k05k3yj.jpg',
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xnxbz1j305k05k74e.jpg',
    'http://ww1.sinaimg.cn/square/005Ctlmsjw1f0q2xmnbk0j305k05kjrg.jpg',
    'http://ww1.sinaimg.cn/square/005Ctlmsjw1f0q2xnk4bnj305k05k3yl.jpg',
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xlrw8zj305k05kmx8.jpg',
    'http://ww3.sinaimg.cn/square/005Ctlmsjw1f0q2xm5bnyj305k05kmx9.jpg',
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xmuhevj305k05kt8u.jpg',
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xn33eyj305k05kjrh.jpg',
    'http://ww4.sinaimg.cn/square/005Ctlmsjw1f0q2xndminj305k05k74g.jpg',
];

export default class Discover extends Component {
    constructor(props) {
        super(props);

        // 初始化列表数据
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', '3', '4', '5', '6', '7', '8', '9', '10'])
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    // 渲染图片宫格
    renderGrid(data, rowNum, columnNum) {
        return (
            <View style={styles.pictureGrid}>

            </View>
        )
    }

    _renderRow(rowData: string, sectionID: number, rowID: number) {
        var count = Math.ceil(Math.random() * 9);
        var rowNum = Math.ceil(count / 3);
        var columnNum = Math.ceil(count / rowNum);
        var pictureArr = [];
        for(var i = 0; i < rowNum; i++) {
            var arr = [];
            for (var j = 0; j < columnNum; j++) {
                arr.push(THUMB_URLS[i * columnNum + j]);
            }
            pictureArr.push(arr);
        }
        // console.log(pictureArr);
        var PictureGrid = <View style={styles.pictureGrid}>
            {
                pictureArr.map((rowitem, rowIndex) => {
                    return (
                        <View key={rowIndex}
                            style={styles.pictureGridRow}>
                            {
                                rowitem.map((item, index) => {
                                    var Item = item ? 
                                        <View key={index}
                                            style={styles.pictureItem}>
                                             <Image 
                                                style={styles.pictureImage}
                                                source={{uri: item}}></Image>
                                        </View> : null;
                                    return (Item);
                                })
                            }
                        </View>
                    )
                })
            }
        </View>;

        return (
            <View style={styles.tableCell}>
                <View style={styles.cellHeader}>
                    <Image 
                        style={styles.photo}
                        source={require('../../img/test/photo.jpeg')}/>
                        <View style={styles.infoWrap}>
                            <View style={styles.titleWrap}>
                                <Text style={styles.authorTitle}>表情之家</Text>
                            </View>
                            <View style={styles.signatureWrap}>
                                <Text style={styles.signatureText}>如果表情包能当饭吃，我能养活整个亚欧大陆</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.contentWrap}>
                    <Text style={styles.contentText}>还有355天就是鸡年除夕了，时间过得真快，回想上次除夕，好像就在昨天一样，在这里我提前祝大家鸡年快了</Text>
                </View>
                {PictureGrid}
            </View>
        )
    }

    render() {
        console.log('render discover');
        return (
            <View style={styles.container}>
                <NavigationBar title={'发现'}/>
                <ScrollView style={styles.scrollView}
                    automaticallyAdjustContentInsets={false}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        scrollRenderAheadDistance={200}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    tableCell: {
        // flexDirection: 'row'
        padding: 13,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#f2f2f2',
        borderBottomColor: '#f2f2f2',
        marginBottom: 9,
        backgroundColor: '#ffffff'
    },
    cellHeader: {
        flexDirection: 'row',
        height: 40
    },
    photo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 13
    },
    infoWrap: {
        flex: 1,
        flexDirection: 'column'
    },
    titleWrap: {
        marginTop: 5
    },
    authorTitle: {
        fontSize: 15,
        color: '#f46200'
    },
    signatureWrap: {
        marginTop: 5
    },
    signatureText: {
        fontSize: 12.5,
        color: '#939393'
    },
    contentWrap: {
        marginTop: 11
    },
    contentText: {
        fontSize: 15.5,
        color: '#333333',
        lineHeight: 24
    },
    pictureGrid: {
        flexDirection: 'column',
        marginTop: 10
    },
    pictureGridRow: {
        flexDirection: 'row'
    },
    pictureItem: {
        marginRight: 5,
        marginBottom: 5
    },
    pictureImage: {
        width: 113,
        height: 113
    }
});
