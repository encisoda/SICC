import {Schema, model} from 'mongoose'

const vehicleSchema = new Schema({
    patent: String,
    denomination: String,
    documents: [{
        type: Schema.Types.ObjectId,
        ref: "Document"
    }]
},{
    versionKey: false
})

export default model('Vehicle', vehicleSchema)