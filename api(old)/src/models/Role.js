import {Schema, model} from 'mongoose';

export const ROLES = ["fullAdmin", "admin", "carga", "control"]

const roleSchema = new Schema({
    name: String
},{
    versionKey: false
});

export default model('Role', roleSchema);