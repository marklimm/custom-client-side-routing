/**
 * Created by mark on 4/21/2017.
 */

var $ = require('jquery');

var hbUtil = require('js/util/handlebars/util');




var registerHBPartials = function(){

    hbUtil.registerHBPartial('studentTableHeader', '#student-table-header-template');
};


var populateStudents = function() {

    $.getJSON("/data/students.json", function (data) {

        hbUtil.renderHBTemplate(data.students, $('#students-list-desktop-template'), $('div.desktop.students-list'));

        hbUtil.renderHBTemplate(data.students, $('#students-list-mobile-template'), $('div.mobile.students-list'));


    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });

}

module.exports = {

    onLoad: function(){
        console.log('in home')

        registerHBPartials();
        populateStudents();

    }
}


