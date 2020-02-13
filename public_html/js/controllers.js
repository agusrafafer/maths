angular.module('app.controllers', [])

        .controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $rootScope, $ionicPlatform, $cordovaLocalNotification, $ionicPopup) {
//                $rootScope.$watch(function () {
//                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//                    return true;
//                });

                $scope.mathAscii = {
                    input: ""
                };

                $scope.var = {
                    tokenFcm: ""
                };

                $ionicPlatform.ready(function () {
//                    FCMPlugin.onTokenRefresh(function (token) {
//                        $ionicPopup.alert({
//                            title: 'Token',
//                            template: token
//                        });
//                    });

                    FCMPlugin.onNotification(function (data) {
                        if (data.wasTapped) {
                            //Notification was received on device tray and tapped by the user.
                            $cordovaLocalNotification.schedule({
                                id: 1,
                                title: 'Notificacion tocada',
                                text: JSON.stringify(data)
                            }).then(function (result) {
                                //console.log(result);
                            });
                            //alert(JSON.stringify(data));
                        } else {
                            //Notification was received in foreground. Maybe the user needs to be notified.
                            //alert(JSON.stringify(data));
                            $cordovaLocalNotification.schedule({
                                id: 2,
                                title: 'Notificacion NO tocada',
                                text: JSON.stringify(data)
                            }).then(function (result) {
                                //console.log(result);
                            });
                        }
                    });


                });

                $scope.obtenerToken = function () {
                    try {
                        FCMPlugin.getToken(function (token) {
                            $ionicPopup.alert({
                                title: 'Token',
                                template: token
                            });
                            $scope.var.tokenFcm = token;
                        });
                    } catch (e) {
                        $ionicPopup.alert({
                            title: 'Token Error',
                            template: 'Excepcion: ' + e
                        });
                        $scope.var.tokenFcm = e;
                    }
                };

            }])

        .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }]);
 