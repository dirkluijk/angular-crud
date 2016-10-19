

angular.module('CrudApp')
    .controller('addController', function ($scope, $state, persons) {
        $scope.person = {
            id: parseInt(Math.random() * 100) + 100,
            name: ''
        };

        $scope.addPerson = function () {
            persons.push($scope.person);
            $state.go('list');
        };
    });