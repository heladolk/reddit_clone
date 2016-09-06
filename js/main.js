"use strict";

let app = angular.module('redditApp', ['ui.bootstrap']);

app.controller('postController', function($scope) {
    $scope.view = {};
    $scope.view.addpost = false;
    $scope.showForm = function() {
        $scope.view.addpost = true;
    };
    $scope.discardForm = function() {
        $scope.view.addpost = false;
        $scope.post = {};
        $scope.postForm.$setPristine();
    };
    $scope.submitForm = function(post) {
        $scope.post.voteCount = 0;
        $scope.post.numComments = 0;
        $scope.post.comments = [];
        $scope.post.datePosted = Date.now();

        $scope.view.posts.push(post);
        $scope.view.addpost = false;
        $scope.post = {};
        $scope.postForm.$setPristine();
    };


    $scope.view.posts = [{
        title: 'Pizza Hut has a new box',
        author: 'Steven Tweedie',
        imgurl: 'http://static4.businessinsider.com/image/55759ecb6da8116622b7ee96-806-604/pizza-hut-blockbuster-box-movie-projector.jpg',
        description: "Thinking that movie nights and pizza are a natural fit, Pizza Hut created a new cardboard pizza box that turns into a working movie projector powered by your smartphone. It's called the Blockbuster Box, and it was designed by Ogilvy Hong Kong for a Pizza Hut marketing stunt, according to The Verge.",
        voteCount: 0,
        numComments: 0,
        comments: [],
        datePosted: '09/04/16'
    },
    {
        title: 'Silicon Valley Housing',
        author: 'Nashvillain2',
        imgurl: 'https://cdn2.vox-cdn.com/thumbor/b6qsUNzGyTjU-M4wJKLoC5L5HKg=/0x0:2961x1974/1920x1280/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/50495517/493360723.0.jpg',
        description: "Silicon Valley has a major housing crisis. The median price of a home in Palo Alto, home to Stanford University, has reached $2.5 million — twice as much as five years ago. Housing in the region has grown so expensive that it’s hard for young families to get their start there.",
        voteCount: 0,
        numComments: 0,
        comments: [],
        datePosted: '09/02/16'
    },
    {
        title: 'Norway’s Biggest Church',
        author: 'Samuel Osborne',
        imgurl: 'http://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2016/09/02/08/norway-church.jpg',
        description: "Norway's state church has lost more than 25,000 members in a month after it launched an online registration system allowing people to sign up or opt out. The Lutheran Church is the official religion in Norway and nearly three-quarters of the population are registered as members. However, since launching a website on 12 August to update its heavily criticised records and offer people an easy way to join or leave, 25,743 members have left the church, 24,653 of those through the site.",
        voteCount: 0,
        numComments: 0,
        comments: [],
        datePosted: '08/31/16'
    }];

});
