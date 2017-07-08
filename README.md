# custom-client-side-routing


This is a client-side routing implementation using the HTML5 History API.  The History API is used to track the user's history as they navigate between the home page and posts routes.  I also read from the url to determine where the user should be routed to

This project started with me wanting to play around with building a SPA using jquery and handlebars.  A big question was how to handle client-side routing.  I wrote a custom implementation, since I was not able to use something like angular router or react-router 

The webpack dev server is used to bundle my AMD module dependencies and to locally host the /public directory

Individual "pages" and utility "classes" are defined as AMD modules

I've created a responsive layout with flexbox, with separate handlebars templates used for desktop and mobile viewport sizes

Tech stack: jquery, lodash, handlebars, moment, webpack, sass

