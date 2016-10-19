

angular.module('CrudApp')
    .controller('addController', function ($state, persons) {
        this.person = {
            id: parseInt(Math.random() * 100) + 100,
            name: ''
        };

        this.addPerson = function () {
            persons.push(this.person);
            $state.go('list');
        };
    });