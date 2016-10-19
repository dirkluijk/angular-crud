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
            controller: 'listController',
            controllerAs: 'vm'
        });

        $stateProvider.state('add', {
            url: "/toevoegen",
            templateUrl: 'src/add/add.html',
            controller: 'addController',
            controllerAs: 'vm'
        });

        $stateProvider.state('edit', {
            url: "/wijzigen/{id:int}",
            templateUrl: 'src/edit/edit.html',
            controller: 'editController',
            controllerAs: 'vm'
        });

        $stateProvider.state('delete', {
            url: "/verwijderen/{id:int}",
            templateUrl: 'src/delete/delete.html',
            controller: 'deleteController',
            controllerAs: 'vm'
        });
    })
    .run(function ($state) {
        $state.go('list');
    });