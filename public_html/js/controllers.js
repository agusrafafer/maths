angular.module('app.controllers', [])

        .controller('homeCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams, $rootScope) {
//                $rootScope.$watch(function () {
//                    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//                    return true;
//                });
                
                $scope.mathAscii = {
                    input: ""
                };

            }])

        .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {


            }])
 