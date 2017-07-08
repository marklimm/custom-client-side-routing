/**
 * Created by mark on 4/21/2017.
 */

var $ = require('jquery');

var routing = require('js/util/routing');
var userState = require('js/util/userState')



userState.saveState();



$(document).ready(function () {

    var pageToGoTo = window.location.pathname;
    routing.goToPage(pageToGoTo);


    defineMasterPageUI();


    //  define some "message of the day" widget
});


window.addEventListener('popstate', function(e) {
    // e.state is equal to the data-attribute of the last image we clicked


    var pageToGoTo = window.location.pathname;
    routing.goToPage(pageToGoTo);


});

var navigationLinksOn = function(){

    $(document).on('click', 'nav a', function(e){
        e.preventDefault();

        var pageToGoTo = $(this).attr('class');
        routing.goToPage(pageToGoTo, true);

    })



}

var defineMasterPageUI = function(){

    navigationLinksOn();
}
