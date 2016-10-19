import {IStateService} from 'angular-ui-router';
import {IPerson} from 'crud-app';

export default class AddController {
    private persons: IPerson[];
    private newPerson: IPerson;
    private $state: IStateService;

    /** @ngInject **/
    constructor($state: IStateService, persons: IPerson[]) {
        this.persons = persons;
        this.$state = $state;
        this.newPerson = {
            id: Math.round(Math.random() * 100) + 100,
            name: ''
        };
    }

    addPerson() {
        this.persons.push(this.newPerson);
        this.$state.go('list');
    };
};