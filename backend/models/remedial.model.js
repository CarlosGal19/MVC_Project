import { Schema, model } from 'mongoose'

const RemedialSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Payed', 'Not Payed', 'Failed', 'Passed']
    },
})

const Remedial = new model('Remedial', RemedialSchema);

export default Remedial;
