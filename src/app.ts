
import listController from './list/list.controller';
import addController from './add/add.controller';
import editController from './edit/edit.controller';
import deleteController from './delete/delete.controller';

import {module} from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import 'angular-ui-router';

let listTemplate = require('./list/list.html');
let addTemplate = require('./add/add.html');
let editTemplate = require('./edit/edit.html');
let deleteTemplate = require('./delete/delete.html');

module('CrudApp', ['ui.router'])
    .factory('persons', () => {
        return [
            {id: 1, name: 'Dirk'},
            {id: 2, name: 'Anja'},
            {id: 3, name: 'Robbert'},
            {id: 4, name: 'Nicolai'}
        ];
    })
    .config(['$stateProvider', function ($stateProvider: IStateProvider) {
        $stateProvider.state('list', {
            url: '/',
            templateUrl: listTemplate,
            controller: listController,
            controllerAs: 'vm'
        });

        $stateProvider.state('add', {
            url: '/toevoegen',
            templateUrl: addTemplate,
            controller: addController,
            controllerAs: 'vm'
        });

        $stateProvider.state('edit', {
            url: '/wijzigen/{id:int}',
            templateUrl: editTemplate,
            controller: editController,
            controllerAs: 'vm'
        });

        $stateProvider.state('delete', {
            url: '/verwijderen/{id:int}',
            templateUrl: deleteTemplate,
            controller: deleteController,
            controllerAs: 'vm'
        });
    }])
    .config(($urlRouterProvider: IUrlRouterProvider) => $urlRouterProvider.otherwise('/'));