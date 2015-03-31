"use strict";

/* controllers */

var filmStillsControllers = angular.module("filmStillControllers", []);

filmStillsControllers.controller("MovieListCtrl", ["$scope", "$http",
  function($scope, $http) {
    $http.get("http://fierce-springs-1255.herokuapp.com/api/v1/movies.json").success(function(data) {
      $scope.album = data;
    });
  }]);


        filmStillsControllers.controller( 'main', function ( $scope, colibri ) {
          movie_data( ).then( function ( xhr ) {
            console.log(xhr.data.movies);
              $scope.albums = xhr.data.movies.map ( function ( entry ) {

              var poster = entry.poster;
              var title = entry.title;
              console.log(poster);
              return { name : entry.title, cover : poster, colors : colibri( poster )};
              } );
          });
        });
