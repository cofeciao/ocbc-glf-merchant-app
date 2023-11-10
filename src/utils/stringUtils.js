define(function(/* require*/) {
    "use strict";

    var dayjs = require('dayjs');

    var stringUtils = {
       
        getUUID: function(){
        	return (new Date().getTime()+"ab"+Math.ceil(Math.random()*100000000)+"lk"+Math.ceil(Math.random()*1000)).substring(0, 30);
        },

        getCurrentTime: function(format){
            if(format){
                return dayjs().format(format);
            } else{
                return dayjs().format();
            }
        },

        getIOS8601Time: function() {
            return dayjs().toISOString();
        },

        randomString: function(length) {
            let len = length || 20;
            const _chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxy2345678';
            const maxPos = _chars.length;
            let str = '';
            for (let i = 0; i < len; i++) {
                str += _chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return str;
        }, 
        getDay: function(lastIndex) {
            const lastDay =  dayjs().subtract(lastIndex, "day").format("DD/MM/YYYY");
            return lastDay;
        }

    };

    return stringUtils;
});
