import Passed from "../models/passed.model.js";

const passedTest = () => {
    console.log('Passed Test');

    Passed.create({
        name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        grade: 90
    });

    console.log('Passed Test Done');
}

export default passedTest;
