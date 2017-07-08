/**
 * Created by mark on 4/21/2017.
 */

var $ = require('jquery');

//import hbUtil from '../util/hbUtil';
var hbUtil = require('js/util/handlebars/util');


module.exports = {


    onLoad: function () {
        console.log('in schedule')


        var data = [
            {
                "hour": 9
            },
            {
                "hour": 10
            },
            {
                "hour": 11
            }
        ]


        hbUtil.renderHBTemplate(data, $('#schedule-template'), $('div.schedule-grid'));

        //
        //registerHBPartials();
        //registerHBHelpers();
        //



    }
}


