import { Empresa } from './../models/empresas';
import { Request, Response } from 'express';

export const getEmpresas = async (req: Request, res: Response) => {
    const listEmpresas = await Empresa.findAll();

    res.json({
        res: listEmpresas,
        msg: "Get Empresas"
    });
}