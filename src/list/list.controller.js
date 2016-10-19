

angular.module('CrudApp')
    .controller('listController', function ($scope, persons) {
        $scope.persons = persons;
    });