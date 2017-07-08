/**
 * Created by mark on 4/22/2017.
 */

var Handlebars = require('handlebars');
var $ = require('jquery');

var hbUtil = {

    registerHBPartial: function(partialName, templateID){

        Handlebars.registerPartial(partialName,
            $(templateID).html());

    },

    renderHBTemplate: function(posts, $template, $target){

        var source = $template.html();
        var template = Handlebars.compile(source);

        var html = template(posts);
        $target.html(html);

    }
}

module.exports = hbUtil;
