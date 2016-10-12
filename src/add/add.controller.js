
/** @ngInject **/
export default function addController($scope, $state, persons) {
    $scope.person = {
        id: parseInt(Math.random() * 100) + 100,
        name: ''
    };

    $scope.addPerson = () => {
        persons.push($scope.person);
        $state.go('list');
    };
};