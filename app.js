'use strict';

angular
        .module('resume-parser', ['ngMaterial'])
        .controller('MainCtrl', ['$http', '$scope', function ($http, $scope) {

                $scope.candidate = {};

                $http.get('resume.json').then(function (response) {

                    $scope.candidate = response.data;

                });

            }]);