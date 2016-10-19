
/** @ngInject **/
export default function addController ($state, persons) {
    this.person = {
        id: parseInt(Math.random() * 100) + 100,
        name: ''
    };

    this.addPerson = () => {
        persons.push(this.person);
        $state.go('list');
    };
};