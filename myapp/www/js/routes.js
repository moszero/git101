angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tab.feed', {
    url: '/feeds',
    views: {
      'tab1': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

  .state('tab.chat', {
    url: '/chat',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tab.profire', {
    url: '/profire',
    views: {
      'tab3': {
        templateUrl: 'templates/profire.html',
        controller: 'profireCtrl'
      }
    }
  })

  .state('tab', {
    url: '/cmru',
    templateUrl: 'templates/tab.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/signup',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('image', {
    url: '/image',
    templateUrl: 'templates/image.html',
    controller: 'imageCtrl'
  })

  .state('post', {
    url: '/post',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })

$urlRouterProvider.otherwise('/cmru/feeds')

  

});