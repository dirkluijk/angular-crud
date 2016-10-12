import * as _ from "lodash";

/** @ngInject **/
export default function editController($scope, $stateParams, persons, $state) {
    var index = _.findIndex(persons, p => p.id === $stateParams.id);

    $scope.person = angular.copy(persons[index]);

    $scope.savePerson = () => {
        persons[index] = $scope.person;
        $state.go('list');
    };
};