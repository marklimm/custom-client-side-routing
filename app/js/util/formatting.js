/**
 * Created by mark on 4/22/2017.
 */

var moment = require('moment');


module.exports = {

    formattedDate: function(dateStr, format){

        return moment(dateStr).format("dddd, MMMM Do, h:mm a");

    }
}
