import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    if(headerToken != undefined && headerToken.startsWith('Bearer' )){
        
        try {
            const bearerToken = headerToken.slice(7);
            console.log(bearerToken);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'julieta123');
            next();
        } catch (error) {
            res.status(401).json({
                msg: 'Token invalido'
            });  
        }
    }else{
        res.status(401).json({
            msg: 'Acceso denegado'
        });
    }
    next();
};

export default validateToken