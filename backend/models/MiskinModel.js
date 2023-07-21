import { Sequelize } from "sequelize";
import db from "../config/database.js";


const {DataTypes} = Sequelize;

const Miskin = db.define('miskin', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        validate:{
            notEmpty: true
        }
    },
    nama_kecamatan:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },    
    jumlah_penduduk_miskin:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    rw:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});

export default Miskin;