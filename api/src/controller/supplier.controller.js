import Supplier from "../models/Supplier"

export const createSupplier = async (req, res) => {
    const {businessName, CUIT} = req.body
    const newSupplier = new Supplier({businessName, CUIT});
    const supplierSaved =  await newSupplier.save()
    res.status(201).json(supplierSaved)
}

export const getSuppliers = async (req, res) => {
    const suppliers = await Supplier.find();
    return res.json(suppliers)
}

export const getSupplierById = async (req, res) => {
    const supplier = await Supplier.findById(req.params.supplierId);
    return res.status(200).json(supplier)
}

export const updateSupplierById = async (req, res) => {
    const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.supplierId, req.body,{
        new: true
    })
    return res.status(204).json(updatedSupplier)
}

export const deleteSupplierById = async (req, res) => {
    const {supplierId} = req.params;
    await Supplier.findByIdAndDelete(supplierId)
    return res.status(204).json()
}
