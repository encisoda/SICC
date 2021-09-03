import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/siccdb",{
    useNewUrlParser: true,
    useunifiedtopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))