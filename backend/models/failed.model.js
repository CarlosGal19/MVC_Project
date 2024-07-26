import { Schema, model } from 'mongoose'

const FailedSchema = new Schema({
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

const Failed = new model('Failed', FailedSchema);

export default Failed;
