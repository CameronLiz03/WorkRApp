import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender:  {
        type: String,
        required: true,
    },
    age:  {
        type: Number,
        min: 18,
        index: true,
    },
    emailAddress:  {
        type: String,
        required: true,
    },
    homeAddress: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    otherPhoneNumber: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Data,
        default: new Date()
    },
    updatedAt: {
        type: Data,
        default: new Date()
    },

});

export default mongoose.model('User', userSchema);