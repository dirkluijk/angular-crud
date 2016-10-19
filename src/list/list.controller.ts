import {IPerson} from 'crud-app';

export default class ListController {
    private persons: IPerson[];

    /** @ngInject **/
    constructor(persons: IPerson[]) {
        this.persons = persons;
    }
}