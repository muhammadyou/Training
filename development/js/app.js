angular.module('myApp',['MyControllers', 'MyServices', 'ui.materialize', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'chart.js', 'ngTable', 'nvd3', 'angular-svg-round-progressbar'])

    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider

            .state('main', {  // loads the static content which is the logo and top heading
                views: {
                    'startView' : {
                        templateUrl: 'templates/main.html',
                        controller: 'MainCtrl as vm'

                    }
                }

            })

            .state('main.home', {
                url: '/home',
                views: {
                    'contentView' : {
                        templateUrl: 'templates/home.html'
                    }
                }

            })

            .state('main.nfvProgram', {
                url: '/NFVProgram',
                views: {
                    'contentView' : {
                        templateUrl: 'templates/NFVProgram.html'
                    }
                }

            })



            .state('main.nfvProgram.TelcoCourses', {
                url: '/TelcoCourses',
                views: {
                    'telcoCoursesView' : {
                        templateUrl: 'templates/NfvTelcoCourses.html',
                        controller: 'NFVTelcoCtrl as vm'
                    }
                }

            })









        $urlRouterProvider.otherwise('/home');
    });

