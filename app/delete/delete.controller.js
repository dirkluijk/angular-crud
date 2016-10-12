

angular.module('CrudApp')
    .controller('deleteController', function ($scope, persons, $stateParams, $state) {
        var index = _.findIndex(persons, function (p) {
            return p.id === $stateParams.id;
        });

        $scope.person = persons[index];

        $scope.removePerson = function () {
            persons.splice(index, 1);
            $state.go('list');
        }
    });