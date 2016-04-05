/**
 * 行为方法
 * https://github.com/facebook/react-native
 */
'use strict';

const HOST = 'http://192.168.1.100';

var Api = {
    getDiscoverList: function (cb) {
        fetch(HOST + '/Home/Discover/getList')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('caoyu', responseJson);
                cb(null, responseJson);
            })
            .catch((error) => {
                // console.warn(error);
                cb(error)
            });
    }
};

module.exports = Api;