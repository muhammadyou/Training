angular.module('myApp',['MyControllers', 'MyServices', 'ui.materialize', 'ui.router', 'ngAnimate'])

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

            .state('main.home', {  // Landing Page
                url: '/home',
                views: {
                    'contentView' : {
                        templateUrl: 'templates/home.html'
                    }
                }

            })

            .state('main.nfvProgram', {  //NFV Courses like Openstack
                url: '/NFVProgram',
                views: {
                    'contentView' : {
                        templateUrl: 'templates/NFVProgram.html',
                        controller: "NFVProgramCtrl as vm"
                    }
                }

            })



            .state('main.nfvProgram.TelcoAutoCourses', {  //Courses Details for a specific area
                url: '/TelcoAutoCourses',
                views: {
                    'TelcoCourseView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'NFVCoursesCtrl as vm'
                    }
                }

            })


            .state('main.nfvProgram.VNFOwnCourses', {  //Courses Details for a specific area
                url: '/VNFOwnCourses',
                views: {
                    'VNFOwnCoursView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'VNFOwnCoursesCtrl as vm'
                    }
                }

            })

            .state('main.nfvProgram.CloudEveryone', {  //Courses Details for a specific area
                url: '/CloudForEveryoneAndManagement',
                views: {
                    'CloudEveryoneView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'CloudEveryoneCtrl as vm'
                    }
                }

            })


        $urlRouterProvider.otherwise('/home');
    });

