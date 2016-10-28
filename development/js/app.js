angular.module('myApp',['MyControllers', 'MyServices', 'ui.materialize', 'ui.router', 'ngAnimate'])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

        $stateProvider

            .state('main', {  // loads the static content which is the logo and top heading
                views: {
                    'startView' : {
                        templateUrl: 'templates/main.html'
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
                url: '/home/NFVProgram',
                views: {
                    'contentView' : {
                        templateUrl: 'templates/NFVProgram.html',
                        controller: "NFVProgramCtrl as vm"
                    }
                }

            })


            // Learninng Paths States

            .state('main.nfvProgram.TelcoAutoLearningPth', {  //Courses Details for a specific area
                url: '/TelcoAutoCourses/LearningPath',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/TelcoAutoLearningPath.html'
                    }
                }

            })

            .state('main.nfvProgram.VNFOwnLearningPth', {  //Courses Details for a specific area
                url: '/VNFOwn/LearningPath',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/VNFOwnLearningPath.html'
                    }
                }

            })


            .state('main.nfvProgram.EveryoneLearningPth', {  //Courses Details for a specific area
                url: '/Everyone/LearningPath',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/EveryoneLearningPath.html'
                    }
                }

            })




            // Courses States

            .state('main.nfvProgram.TelcoAutoCourses', {  //Courses Details for a specific area
                url: '/TelcoAutoCourses/LearningStep',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'TelcoCoursesCtrl as vm'
                    }
                }

            })


            .state('main.nfvProgram.VNFOwnCourses', {  //Courses Details for a specific area
                url: '/VNFOwnCourses/LearningStep',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'VNFOwnCoursesCtrl as vm'
                    }
                }

            })

            .state('main.nfvProgram.CloudEveryone', {  //Courses Details for a specific area
                url: '/CloudForEveryoneAndManagement/LearningStep',
                views: {
                    'learningPathView' : {
                        templateUrl: 'templates/NfvCourses.html',
                        controller: 'CloudEveryoneCtrl as vm'
                    }
                }

            })

        $urlRouterProvider.otherwise('/home');


    });

