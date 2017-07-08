/**
 * Created by mark on 4/22/2017.
 */

var moment = require('moment');
var $ = require('jquery');

var state = {
    name: 'Harry Potter',
    tags: []
}

if(state.tags.length === 0){

    //  in real life I can't just create tags like this on the client-side because then the user can modify it in CDT ... maybe I create some sort of temp identifier on login that gets associated with the tags that the student has .. and then when calls are made to the API only that identifier gets passed through

    //state.tags = ['all'];

    state.tags = ['gryffindor', '6th year', 'DADA-604'];
}


module.exports = {

    saveState: function(){


        //  save to sessionStorage
        sessionStorage.setItem('state', JSON.stringify(state));



    },

    getState: function(){

        return $.parseJSON(sessionStorage.getItem('state'));

    }
}
