

angular.module('CrudApp')
    .controller('editController', function ($scope, $stateParams, persons, $state) {
        var index = _.findIndex(persons, function (p) {
            return p.id === $stateParams.id;
        });

        $scope.person = angular.copy(persons[index]);

        $scope.savePerson = function () {
            persons[index] = $scope.person;
            $state.go('list');
        };
    });