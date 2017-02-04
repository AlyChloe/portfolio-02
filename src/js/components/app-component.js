angular.module('portfolioApp')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log('APP');
      }

      ctrl.nav = ['home', 'about', 'career', 'contact'];
      ctrl.social = ['twitter', 'instagram', 'github-alt'];
    },
    controllerAs: 'appCtrl'
  });