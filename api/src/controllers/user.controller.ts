import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { User } from '../models/user';
import { UserInterface } from '../interface/user.interface';
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, res: Response) => {

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)
    
    //Validamos si el usuario ya existe

    const user = await User.findOne({where: {username: username}})

    if(user){
        return res.status(400).json({
            msg: `ya existe un usuario con el nombre ${username}`
        })
    }

    try{
        User.create({
            username: username,
            email: email,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${username} creado exitosamente`,
            });
    }
    catch (error){
        res.status(400).json({

        })
    }

}


export const loginUser = async (req: Request, res: Response) => {

    const { username, password } =  req.body

    const user: any = await User.findOne({where: {username: username}})

    if(!user){
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username}`
        })
    }

    const passwordValid = await bcrypt.compare(password, user.password)

    if(!passwordValid){
        return res.status(400).json({
            msg: `Password Incorrecto`
        })
    }

    //aca tambien se va agregar los roles

    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'julieta123' )

    res.json({
        token
        })

}