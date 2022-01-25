import {Schema, model} from 'mongoose'

const supplierSchema = new Schema({
    businessName: String,
    CUIT: Number
},{
    versionKey: false
})

export default model('Supplier', supplierSchema)