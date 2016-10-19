import * as _ from "lodash";

/** @ngInject **/
export default function deleteController(persons, $stateParams, $state) {
    var index = _.findIndex(persons, p => p.id === $stateParams.id);

    this.person = persons[index];

    this.removePerson = () => {
        persons.splice(index, 1);
        $state.go('list');
    }
};