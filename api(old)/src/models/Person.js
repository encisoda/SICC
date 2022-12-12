import {Schema, model} from 'mongoose'

const personSchema = new Schema({
    name: String,
    surname: String,
    CUIT: Number,
    position: String,
    documents: [{
        type: Schema.Types.ObjectId,
        ref: "Document"
    }]
},{
    versionKey: false
})

export default model('Person', personSchema)