import Person from "../models/Person"
import Document from "../models/Document";

export const createPerson = async (req, res) => {
    const {name, surname, CUIT, position, documents } = req.body
    const documentsFound = await Document.find({ name: { $in: documents } });
    const newPerson = new Person({
        name,
        surname,
        CUIT,
        position, 
        documents: documentsFound.map((document) => document._id)
    });

    const personSaved = await newPerson.save()
    res.status(201).json(personSaved)
}
