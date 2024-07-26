import { Schema, model } from 'mongoose'

const PassedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
})

const Passed = new model('Passed', PassedSchema);

export default Passed;
