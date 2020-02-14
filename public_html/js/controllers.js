angular.module('app.controllers', [])

        .controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification', '$ionicPopup', 
                        function ($scope, $stateParams, $rootScope, $ionicPlatform, $cordovaLocalNotification, $ionicPopup) {

                $scope.mathAscii = {
                    input: ""
                };

                $scope.var = {
                    tokenFcm: ""
                };

                $ionicPlatform.ready(function () {

                    FCMPlugin.onNotification(function (data) {
                        if (data.wasTapped) {
                            alert(JSON.stringify(data));
                            //Notification was received on device tray and tapped by the user.
//                            $cordovaLocalNotification.schedule({
//                                id: 1,
//                                title: 'Notificacion tocada',
//                                text: JSON.stringify(data)
//                            }).then(function (result) {
//                                //console.log(result);
//                            });
                            //alert(JSON.stringify(data));
                        } else {
                            //Notification was received in foreground. Maybe the user needs to be notified.
                            //alert(JSON.stringify(data));
//                            $cordovaLocalNotification.schedule({
//                                id: 2,
//                                title: 'Notificacion NO tocada',
//                                text: JSON.stringify(data)
//                            }).then(function (result) {
//                                //console.log(result);
//                            });
                        }
                    });


                });

                $scope.obtenerToken = function () {
                    try {
                        FCMPlugin.getToken(function (token) {
//                            $ionicPopup.alert({
//                                title: 'Token',
//                                template: token
//                            });
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

        .controller('menuCtrl', ['$scope', '$stateParams', 
            function ($scope, $stateParams) {
                $scope.var = {
                    prueba: ""
                };

            }]);
 