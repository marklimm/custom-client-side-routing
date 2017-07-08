/**
 * Created by mark on 4/21/2017.
 */

var $ = require('jquery');
var _ = require('lodash');

var hbUtil = require('js/util/handlebars/util');
var hbHelpers = require('js/util/handlebars/commonHelpers');

var userState = require('js/util/userState')

var self = this;
var pageReference;


var registerHBPartials = function () {

    //Handlebars.registerPartial('studentTableHeader',
    //    $('#student-table-header-template').html());

};

//var registerHBHelpers = function () {
//
//    Handlebars.registerHelper('formatDate', function (timestamp, options) {
//
//        return formatting.formattedDate(timestamp, "dddd, MMMM Do, h:mm a");
//        //return moment(timestamp).format("dddd, MMMM Do, h:mm a");
//
//    });
//};

var getPosts = function () {

    self.userTags = userState.getState().tags;

    $.getJSON("/data/posts.json", function (data) {


        var parentPosts = _.filter(data.posts, function(post) { return !post.parentId; });

        var postsThatMatchTheUsersTags = _.filter(parentPosts, function(post){

            if(self.userTags.indexOf('all') > -1 ||
                post.tags.indexOf('all') > -1){
                return true;
            }

            //  I don't know why _.intersection doesn't work like the documentation describes
            //var matchingTags = _.intersection([post.tags, self.userTags]);

            var matchingTags = post.tags.filter(function(n) {
                return self.userTags.indexOf(n) !== -1;
            });

            return matchingTags.length > 0;
        })


        //var postsThatMatchTheUsersTags = _.intersection([parentPosts, self.userTags]);

        if(postsThatMatchTheUsersTags.length === 0){
            $('div.posts-placeholder').text('No posts at the moment');
            return;
        }

        var sortedParentPosts = _.orderBy(postsThatMatchTheUsersTags, ['timestamp'], ['desc']);



        hbUtil.renderHBTemplate(sortedParentPosts, $('#posts-list-desktop-template'), $('div.desktop.posts-placeholder'));

        //renderHBTemplate(data.posts, $('#posts-list-mobile-template'), $('div.mobile.posts-list'));


    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });

};


var eventHandlersOn = function () {

    $(document).on('click', 'div.post a.title', function (event) {
        event.preventDefault();
        console.log('clicked on a title')

        pageReference.router.goToPage(event.target.pathname, true);

    })

    console.log('posts event handlers ON')
}


module.exports = {

    eventHandlersOff: function(){

        $(document).off('click', 'div.post a.title');

        console.log('posts event handlers OFF')
    },

    onLoad: function (selectedPost) {
        console.log('in posts')

        //  store this reference to the page, which has the router passed into it
        pageReference = this;




        registerHBPartials();
        hbHelpers.registerFormatDate();
        hbHelpers.registerArrayToString();

        getPosts();

        eventHandlersOn();

    }
}


