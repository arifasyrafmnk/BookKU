'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './gallery.routes';

export class GalleryComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.publisher = ['Dubook','Fixi']

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('book');
    });
  }

  searchBook(lala){
    this.$http.get('/api/books/search/'+lala)
      .then(response => {
        this.awesomeBooks = response.data;
        this.socket.syncUpdates('book', this.awesomeBooks);
      });
  }

  searchBookByPublisher(lala){
    console.log('lala',lala);
    this.$http.get('/api/books/search/publisher/'+lala)
      .then(response => {
        this.awesomeBooks = response.data;
        this.socket.syncUpdates('book', this.awesomeBooks);
      });
  }

  $onInit() {
    this.$http.get('/api/books')
      .then(response => {
        this.awesomeBooks = response.data;
        this.socket.syncUpdates('book', this.awesomeBooks);
      });
  }
}

export default angular.module('arifdbApp.gallery', [uiRouter])
  .config(routes)
  .component('gallery', {
    template: require('./gallery.html'),
    controller: GalleryComponent,
    controllerAs: 'galleryCtrl'
  })
  .name;
