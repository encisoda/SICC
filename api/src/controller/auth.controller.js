import User from '../models/User';
import config from '../config';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';

export const signUp = async (req, res) => {
    try{
        const {username, email, password, roles} = req.body;

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        if (roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: "control"})
            newUser.roles = [role._id];
        }
        
        const savedUser = await newUser.save();

        const token = jwt.sign({id: savedUser._id},config.SECRET,{
            expiresIn: 86400 // 24 horas
        })

        return res.status(200).json({token})
    } catch(error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


export const signIn = async (req, res) => {

    try{
    const userFound = await User.findOne({email: req.body.email}).populate("roles");

    if (!userFound) return res.status(400).json({messege: "user not found"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});

    const token = jwt.sign({id: userFound._id},config.SECRET,{
        expiresIn: 86400 // 24 horas
    })

    res.json({token});
    } catch (error) {
        console.log(error);
    }   

}