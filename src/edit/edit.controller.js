import * as _ from "lodash";

/** @ngInject **/
export default function editController($stateParams, persons, $state) {
    var index = _.findIndex(persons, p => p.id === $stateParams.id);

    this.person = angular.copy(persons[index]);

    this.savePerson = () => {
        persons[index] = this.person;
        $state.go('list');
    };
};