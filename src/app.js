angular
    .module('CrudApp', ['ui.router'])
    .factory('persons', function () {
        return [
            {id: 1, name: 'Dirk'},
            {id: 2, name: 'Anja'},
            {id: 3, name: 'Robbert'},
            {id: 4, name: 'Nicolai'}
        ];
    })
    .config(function ($stateProvider) {
        $stateProvider.state('list', {
            url: "/",
            templateUrl: 'src/list/list.html',
            controller: 'listController'
        });

        $stateProvider.state('add', {
            url: "/toevoegen",
            templateUrl: 'src/add/add.html',
            controller: 'addController'
        });

        $stateProvider.state('edit', {
            url: "/wijzigen/{id:int}",
            templateUrl: 'src/edit/edit.html',
            controller: 'editController'
        });

        $stateProvider.state('delete', {
            url: "/verwijderen/{id:int}",
            templateUrl: 'src/delete/delete.html',
            controller: 'deleteController'
        });
    })
    .run(function ($state) {
        $state.go('list');
    });