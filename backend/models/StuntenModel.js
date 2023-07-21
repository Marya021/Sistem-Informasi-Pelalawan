import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('stuntens', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    excel:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

export default User;