

angular.module('CrudApp')
    .controller('deleteController', function (persons, $stateParams, $state) {
        var index = _.findIndex(persons, function (p) {
            return p.id === $stateParams.id;
        });

        this.person = persons[index];

        this.removePerson = function () {
            persons.splice(index, 1);
            $state.go('list');
        }
    });