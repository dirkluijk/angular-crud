import * as _ from 'lodash';
import {IPerson, ICrudParams} from 'crud-app';
import {IStateService} from 'angular-ui-router';

export default class EditController {
    private persons: IPerson[];
    private person: IPerson;
    private index: number;
    private $state: IStateService;

    /** @ngInject **/
    constructor($stateParams: ICrudParams, persons: IPerson[], $state: IStateService) {
        this.index = _.findIndex(persons, p => p.id === $stateParams.id);
        this.person = angular.copy(persons[this.index]);
        this.$state = $state;
        this.persons = persons;

    }

    savePerson() {
        this.persons[this.index] = this.person;
        this.$state.go('list');
    }
};