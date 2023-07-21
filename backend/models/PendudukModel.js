import { Sequelize } from "sequelize";
import db from "../config/database.js";
import DesaKelurahan from "./DesaKelurahanModel.js";


const {DataTypes} = Sequelize;

const Penduduk = db.define('penduduks', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        validate:{
            notEmpty: true
        }
    },
    kartu_keluarga:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    no_hp:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    tempat_lahir:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    tanggal_lahir:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },    
    desa_kelurahan_id:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate:{
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});


Penduduk.hasMany(DesaKelurahan);
DesaKelurahan.belongsTo(Penduduk, {foreignKey: 'desa_kelurahan_id'});

export default Penduduk;