/* eslint-disable*/
/**
 * 封装的NavigationBar
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    StatusBarIOS,
    Image
} from 'react-native';

export default class NavigationBar extends Component {
    static defaultProps = {
        barTintColor: '#323136',
        titleTextColor: '#ffffff',
        tintColor: '#ffffff',
        leftButton: {},
        rightButton: {}
    };

    static propTypes = {
        barTintColor: React.PropTypes.string,
        title: React.PropTypes.string.isRequired,
        titleTextColor: React.PropTypes.string,
        tintColor: React.PropTypes.string,
        leftButton: React.PropTypes.object,
        rightButton: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        var LeftButton = this.props.leftButton.title ? 
            <TouchableOpacity
                style={[styles.buttonContainer, styles.leftButton]}
                onPress={() => {
                    this.props.leftButton.onPress && this.props.leftButton.onPress()
                }}>
                <Image 
                    source={require('./img/navbarBackIcon.png')} 
                    style={styles.navbarBackIcon}/>
                <Text style={[styles.buttonText, {
                    color: this.props.tintColor
                }]}>{this.props.leftButton.title}</Text>
            </TouchableOpacity> : null;
        // var RightButtonNode = this.props.rightButton.node;
        var RightButton = this.props.rightButton.title || this.props.rightButton.node ? 
            <TouchableOpacity
                style={[styles.buttonContainer, styles.rightButton]}
                onPress={() => {
                    this.props.rightButton.onPress && this.props.rightButton.onPress()
                }}>
                <Text style={[styles.buttonText, {
                    color: this.props.tintColor
                }]}>{this.props.rightButton.title}</Text>
                {this.props.rightButton.node}
            </TouchableOpacity> : null;
        return (
            <View 
                style={[styles.container, {
                    backgroundColor: this.props.barTintColor
                }]}>
                <View 
                    style={styles.navContainer}>
                    <TouchableOpacity 
                        style={[styles.titleContainer]}
                        activeOpacity={1}
                        onPress={() => {
                            this.props.onTitlePress && this.props.onTitlePress()
                        }}>
                        <Text style={[styles.titleText, {
                            color: this.props.titleTextColor
                        }]}>{this.props.title}</Text>
                    </TouchableOpacity>
                    {LeftButton}
                    {RightButton}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 64,
        paddingTop: 20
    },
    navContainer: {
        height: 44
    },
    buttonContainer: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0
    },
    titleContainer: {
        justifyContent: 'center',
        height: 44,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 17,
        fontWeight: '600'
    },
    leftButton: {
        paddingLeft: 8,
        left: 0
    },
    rightButton: {
        paddingRight: 8,
        right: 0
    },
    buttonText: {
        fontSize: 16
    },
    navbarBackIcon: {
        width: 17,
        height: 17
    }
});

