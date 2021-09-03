import File from '../models/File'

export const createFile = async (req, res) => {
    const {name, category, state, fileURL, userUpdate, userCheck, company} = req.body
    const newFile = new File({name, category, state, fileURL, userUpdate, userCheck, company});
    const fileSaved = await newFile.save()
    res.status(201).json(fileSaved)
}

export const getFiles = async (req, res) => {
    const files = await File.find();
    res.json(files)

}

export const getFileById = (req, res) => {


}

export const updateFileById = (req, res) => {


}

export const deleteFileById = (req, res) => {


}