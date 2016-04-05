/**
 * 图片展示浮层
 * https://github.com/pandaface2016/pfrn.git
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    StatusBarIOS,
    NativeModules
} from 'react-native';
var SendMsgToWeChatViewController = NativeModules.SendMsgToWeChatViewController;
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

export default class ImageView extends Component {
    constructor(props) {
        super(props);

        this.sendMsgToWeChat = this.sendMsgToWeChat.bind(this);
    }

    componentWillMount() {
        StatusBarIOS.setHidden(true);
    }

    // 分享功能
    sendMsgToWeChat(scene) {
        SendMsgToWeChatViewController(this.props.url, scene);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.initImageView('hide');
                }}>
                <View style={styles.container}>
                    <View style={styles.imageWrap}>
                        <Image source={{uri: this.props.url}} 
                            style={styles.image}/>
                    </View>
                    <View style={styles.btnWrap}>
                        <View style={styles.btnItem}>
                            <TouchableOpacity
                                onPress={() => {
                                    SendMsgToWeChatViewController.sendEmotionContent(this.props.url, 0);
                                }}>
                                <Image source={require('../../img/wx_session.png')} 
                                    style={styles.btnIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnItem}>
                            <TouchableOpacity>
                                <Image source={require('../../img/wx_timeline.png')}
                                    style={styles.btnIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0
    },
    imageWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        height: 240,
        resizeMode: 'contain'
    },
    btnWrap: {
        height: 120,
        flexDirection: 'row',
        paddingHorizontal: 40
    },
    btnItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIcon: {
        width: 60,
        height: 60
    }
});
