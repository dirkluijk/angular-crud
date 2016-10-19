

angular.module('CrudApp')
    .controller('editController', function ($stateParams, persons, $state) {
        var index = _.findIndex(persons, function (p) {
            return p.id === $stateParams.id;
        });

        this.person = angular.copy(persons[index]);

        this.savePerson = function () {
            persons[index] = this.person;
            $state.go('list');
        };
    });