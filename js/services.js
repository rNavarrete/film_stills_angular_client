"use strict";

/* Services */

var filmstillServices = angular.module("filmstillServices", ["ngResoure"]);

  filmstillServices.factory( 'movie_data', function ( $http ) {
    return function ( ) {
      return $http.get( 'https://fierce-springs-1255.herokuapp.com/api/v1/movies.json');
    };
  })


  .factory( 'colibri', function ( $rootScope ) {
    return function ( url ) {
      var image = new Image( ), colors = { };

      image.addEventListener( 'load', function ( ) {
        $rootScope.$apply( function ( ) {
          var result = Colibri.extractImageColors( image, 'css' );
          Object.keys( result ).forEach( function ( key ) {
            colors[ key ] = result[ key ];
          });
        });
      });

      image.crossOrigin = 'Anonymous';
      image.src = url;
      return colors;

    };
  })



