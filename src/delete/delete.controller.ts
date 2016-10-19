import * as _ from "lodash";

/** @ngInject **/
export default function deleteController($scope, persons, $stateParams, $state) {
    var index = _.findIndex(persons, p=> p.id === $stateParams.id);

    $scope.person = persons[index];

    $scope.removePerson = () => {
        persons.splice(index, 1);
        $state.go('list');
    }
};