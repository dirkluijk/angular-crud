
import listController from './list/list.controller';
import addController from './add/add.controller';
import editController from './edit/edit.controller';
import deleteController from './delete/delete.controller';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import listTemplate from './list/list.html';
import addTemplate from './add/add.html';
import editTemplate from './edit/edit.html';
import deleteTemplate from './delete/delete.html';

angular
    .module('CrudApp', [uiRouter])
    .factory('persons', () => {
        return [
            {id: 1, name: 'Dirk'},
            {id: 2, name: 'Anja'},
            {id: 3, name: 'Robbert'},
            {id: 4, name: 'Nicolai'}
        ];
    })
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('list', {
            url: '/',
            templateUrl: listTemplate,
            controller: listController
        });

        $stateProvider.state('add', {
            url: '/toevoegen',
            templateUrl: addTemplate,
            controller: addController
        });

        $stateProvider.state('edit', {
            url: '/wijzigen/{id:int}',
            templateUrl: editTemplate,
            controller: editController
        });

        $stateProvider.state('delete', {
            url: '/verwijderen/{id:int}',
            templateUrl: deleteTemplate,
            controller: deleteController
        });
    }]);