/* eslint-disable*/
/**
 * 发现页面
 * https://github.com/pandaface2016/pfrn.git
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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Immutable from '../../util/immutable.js';
import NavigationBar from '../../component/NavigationBar/NavigationBar.js';

export default class Discover extends Component {
    constructor(props) {
        super(props);

        this._renderRow = this._renderRow.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        var next = Immutable.fromJS(nextProps.list);
        var now = Immutable.fromJS(this.props.list);
        return !Immutable.is(next, now);
    }

    _renderRow(rowData: object, sectionID: number, rowID: number) {
        // var count = Math.ceil(Math.random() * 9);
        var count = rowData.face_list.length;
        var rowNum = Math.ceil(count / 3);
        var columnNum = Math.ceil(count / rowNum);
        var pictureArr = [];
        for(var i = 0; i < rowNum; i++) {
            var arr = [];
            for (var j = 0; j < columnNum; j++) {
                arr.push(rowData.face_list[i * columnNum + j].url);
            }
            pictureArr.push(arr);
        }

        var PictureGrid = <View style={styles.pictureGrid}>
            {
                pictureArr.map((rowitem, rowIndex) => {
                    return (
                        <View 
                            key={rowIndex}
                            style={styles.pictureGridRow}>
                            {
                                rowitem.map((item, index) => {
                                    var Item = item ?
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => {
                                                this.props.initImageView('show', item)
                                            }}>
                                            <View 
                                                style={styles.pictureItem}>
                                                 <Image 
                                                    style={styles.pictureImage}
                                                    source={{uri: item}}></Image>
                                            </View>
                                        </TouchableOpacity> : null;
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
                        source={{uri: rowData.avatar}}/>
                        <View style={styles.infoWrap}>
                            <View style={styles.titleWrap}>
                                <Text style={styles.authorTitle}>{rowData.face_user_name}</Text>
                            </View>
                            <View style={styles.signatureWrap}>
                                <Text style={styles.signatureText}>{rowData.signature}</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.contentWrap}>
                    <Text style={styles.contentText}>{rowData.content}</Text>
                </View>
                {PictureGrid}
            </View>
        )
    }

    render() {
        console.log('render discover');
        // 初始化列表数据
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = ds.cloneWithRows(this.props.list);
        return (
            <View style={styles.container}>
                <NavigationBar title={'发现'}/>
                <ScrollView style={styles.scrollView}
                    automaticallyAdjustContentInsets={false}>
                    <ListView
                        dataSource={dataSource}
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
        height: 113,
        resizeMode: 'contain'
    }
});
