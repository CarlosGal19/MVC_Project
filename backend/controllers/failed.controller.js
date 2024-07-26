import Failed from "../models/failed.model.js";

const failedTest = () => {
    console.log('Failed Test');

    Failed.create({
        name: 'Jane',
        middle_name: 'Doe',
        last_name: 'Smith',
        grade: 50
    });

    console.log('Failed Test Done');
}

export default failedTest;
