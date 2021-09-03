import {Schema, model} from 'mongoose'

const fileSchema = new Schema({
    name: String,
    category: String,
    state: String,
    fileURL: String,
    userUpdate: Number,
    userCheck: Number,
    company: String
},{
    timestamps: true,
    versionKey: false
})

export default model('File', fileSchema);