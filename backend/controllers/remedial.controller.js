import Remedial from "../models/remedial.model.js";

const remedialTest = () => {
    console.log('Remedial Test');

    Remedial.create({
        name: 'John',
        status: 'Pending'
    });

    console.log('Remedial Test Done');
}

export default remedialTest;
