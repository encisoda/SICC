import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Empresa = sequelize.define('empresa', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}) 