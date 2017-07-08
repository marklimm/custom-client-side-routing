/**
 * Created by mark on 4/22/2017.
 */

var Handlebars = require('handlebars');
var _ = require('lodash');

var formatting = require('js/util/formatting');


module.exports = {

    registerArrayToString: function(){

        Handlebars.registerHelper('arrayToString', function (array, options) {


            var arrStr = _.reduce(array, function(accumulater, n) {
                return n + ', ';
            }, 0);

            return arrStr.slice(0, arrStr.length - 2);

        });


    },

    registerFormatDate: function(){

        Handlebars.registerHelper('formatDate', function (timestamp, options) {

            return formatting.formattedDate(timestamp, "dddd, MMMM Do, h:mm a");

        });

    }

}
