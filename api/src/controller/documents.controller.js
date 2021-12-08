import Document from "../models/Document"

export const createDocument = async (req, res) => {
    //console.log(req.body)
    const {name, category, date, creatorUserId, verifierUserId, company, fileURL} = req.body
    const newDocument = new Document({name, category, date, creatorUserId, verifierUserId, company, fileURL});
    const documentSaved = await newDocument.save()
    res.status(201).json(documentSaved)
}

export const getDocuments = async (req, res) => {
    const documents = await Document.find();
    return res.json(documents)
}

export const getDocumentById = async (req, res) => {
    const document = await Document.findById(req.params.documentId);
    return res.status(200).json(document)
}

export const getDocumentByCompany = async (req, res) => {
    const document = await Document.findByCompany(req.params.company);
    return res.status(200).json(document)
}

export  const updateDocumentById = async (req, res) => {
    const updatedDocument = await Document.findByIdAndUpdate(req.params.documentId, req.body,{
        new: true
    })
    return res.status(204).json(updatedDocument)
}

export  const deleteDocumentById = async (req, res) => {
    const {documentId} = req.params;
    await Document.findByIdAndDelete(documentId)
    return res.status(204).json()
}
