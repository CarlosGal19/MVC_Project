import Student from "../models/student.model.js";

export default function test() {
    console.log('Connection with student controller successfully');

    try {
        Student.create({
            name: 'Carlos',
            last_name: 'Galindo',
            grade: 10
        });
        console.log('User created successfully')
    } catch (error) {
        console.log(error.message)
    }
}
