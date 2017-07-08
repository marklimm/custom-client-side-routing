/**
 * Created by mark on 4/21/2017.
 */

var $ = require('jquery');


var hbUtil = require('js/util/handlebars/util');
var hbHelpers = require('js/util/handlebars/commonHelpers');


var registerHBPartials = function () {

    //Handlebars.registerPartial('studentTableHeader',
    //    $('#student-table-header-template').html());

};


var getPost = function (postId) {

    $.getJSON("/data/posts.json", function (data) {

        var selectedPostData = data.posts[postId];

        hbUtil.renderHBTemplate(selectedPostData, $('#post-desktop-template'), $('div.desktop.post-placeholder'));

        var replyPosts = _.filter(data.posts, function(post) { return post.parentId === selectedPostData.id; });

        var sortedReplyPosts = _.orderBy(replyPosts, ['timestamp'], ['desc']);

        hbUtil.renderHBTemplate(sortedReplyPosts, $('#posts-list-desktop-template'), $('div.desktop.responses-placeholder'));



    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });

};


module.exports = {


    onLoad: function (selectedPost) {
        console.log('in individual post')

        registerHBPartials();
        hbHelpers.registerFormatDate();

        getPost(selectedPost);

    }
}


