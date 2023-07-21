import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Kecamatan = db.define('kecamatans', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        validate:{
            notEmpty: true
        }
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    koordinat:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});


export default Kecamatan;
