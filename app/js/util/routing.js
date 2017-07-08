/**
 * Created by mark on 4/22/2017.
 */

var $ = require('jquery');
var pageRepository = require('js/util/pageRepository');


var pages = pageRepository;


var theRouter = {

    currPage: 'home',

    goToPage: function(path, addToHistory){

        var routeRegex = /\/?(?:(\w+)(?:\/([\w\d-]+))?)?/g;
        var match = routeRegex.exec(path);

        if (!match) { return; }

        var page = match[1]
        var param = match[2];



        if(path === '/' || !pages.hasOwnProperty(page)){
            page = 'home';
        }

        //  identify the current view and off() its event handlers
        var prevPageModule = pages[this.currPage];
        if(prevPageModule['eventHandlersOff']){
            prevPageModule.eventHandlersOff();
        }


        var nextPageModule = pages[page];

        load(page, nextPageModule.onLoad.bind(nextPageModule, param))

        this.currPage = page;

        if(addToHistory){
            //  add to the History API so the user can click the back button

            var newPath ='/'+ page;

            if(param){ newPath += '/' + param;}

            history.pushState(
                {id: param},
                'doesnt matter',
                newPath
            );
        }

    }

};

//  pass the router down into each one of the pages ... this is necessary so that each one of the pages knows about the router.  This is to get around a circular dependency with require()-ing modules where the router needs to know about all the pages, but all the pages need to know about the router as well --> which leads to a circular dependency
for(var i in pages){
    pages[i].router = theRouter;
}


var load = function(page, onComplete){

    $('#content-placeholder')
        .load('/templates/' + page + '.html', onComplete)
        .attr('class', page);

}

module.exports = theRouter;

