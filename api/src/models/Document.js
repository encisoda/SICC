import { model, Schema} from 'mongoose'

const documentSchema = new Schema({
    name: String,
    category: String,
    date: Date,
    creatorUserId: Number,
    verifierUserId: Number,
    company: String,
    fileURL: String,
},{
    timestamps: true,
    versionKey: false
})

export default model('Document', documentSchema)