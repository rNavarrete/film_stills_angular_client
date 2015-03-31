var filmStillsApp = angular.module( 'filmStillsApp', [ "ngRoute", "ngResource", "filmStillControllers"]);

filmStillsApp.config(["$routeProvider",
    function($routeProvider) {
      $routeProvider.
      when("/new_still", {
        templateUrl: "partials/new_still.html",
        controller: "NewMovieStillCtrl"
      }).when("/", {
        templateUrl: "partials/movies_index.html",
        controller: "MovieListCtrl"
      })
   }])

