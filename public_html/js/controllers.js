angular.module('app.controllers', [])

        .controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $rootScope, $ionicPlatform, $cordovaLocalNotification) {
//                $rootScope.$watch(function () {
//                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//                    return true;
//                });

                $scope.mathAscii = {
                    input: ""
                };

                $ionicPlatform.ready(function () {
                    var notificationOpenedCallback = function (jsonData) {
                        $cordovaLocalNotification.schedule({
                                    id: 1,
                                    title: 'Notificacion tocada',
                                    text: JSON.stringify(jsonData)
                                }).then(function (result) {
                                    //console.log(result);
                                });
                    };

                    window.plugins.OneSignal
                            .startInit("143a91de-c5be-4d32-80e8-519d890c7ec7")
                            .handleNotificationOpened(notificationOpenedCallback)
                            .endInit();
//                    FCMPlugin.onNotification(function (data) {
//                        if (data.wasTapped) {
//                            //Notification was received on device tray and tapped by the user.
//                            $cordovaLocalNotification.schedule({
//                                    id: 1,
//                                    title: 'Notificacion tocada',
//                                    text: JSON.stringify(data)
//                                }).then(function (result) {
//                                    //console.log(result);
//                                });
//                            //alert(JSON.stringify(data));
//                        } else {
//                            //Notification was received in foreground. Maybe the user needs to be notified.
//                            //alert(JSON.stringify(data));
//                            $cordovaLocalNotification.schedule({
//                                    id: 2,
//                                    title: 'Notificacion NO tocada',
//                                    text: JSON.stringify(data)
//                                }).then(function (result) {
//                                    //console.log(result);
//                                });
//                        }
//                    });
                });

            }])

        .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])
 