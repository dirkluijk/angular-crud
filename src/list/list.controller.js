

angular.module('CrudApp')
    .controller('listController', function (persons) {
        this.persons = persons;
    });