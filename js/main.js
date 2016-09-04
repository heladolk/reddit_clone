"use strict";

let app = angular.module('redditApp', []);

app.controller('displayController', function($scope) {
    $scope.view = {};
    $scope.view.posts = [{
        title: 'What it will take to make Silicon Valley affordable again',
        author: 'Nashvillain2',
        img: 'https://cdn2.vox-cdn.com/thumbor/b6qsUNzGyTjU-M4wJKLoC5L5HKg=/0x0:2961x1974/1920x1280/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/50495517/493360723.0.jpg',
        description: "Silicon Valley has a major housing crisis. The median price of a home in Palo Alto, home to Stanford University, has reached $2.5 million — twice as much as five years ago. Housing in the region has grown so expensive that it’s hard for young families to get their start there."
    }];

});
