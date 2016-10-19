import * as _ from 'lodash';
import {IPerson, ICrudParams} from 'crud-app';
import {IStateService} from 'angular-ui-router';

export default class DeleteController {
    private person: IPerson;
    private persons: IPerson[];
    private $state: IStateService;
    private index: number;

    /** @ngInject **/
    constructor(persons: IPerson[], $stateParams: ICrudParams, $state: IStateService) {
        this.index = _.findIndex(persons, p => p.id === $stateParams.id);
        this.person = persons[this.index];
        this.persons = persons;
        this.$state = $state;
    }

    removePerson() {
        this.persons.splice(this.index, 1);
        this.$state.go('list');
    }
};