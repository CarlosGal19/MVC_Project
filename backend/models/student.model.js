import { Schema, model } from 'mongoose'

const StudentSchema = new Schema({
    name: {
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

const Student = new model('Student', StudentSchema);

export default Student;
