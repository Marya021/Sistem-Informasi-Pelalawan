import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import Kecamatan from "./KecamatanModel.js";

const DesaKelurahan = db.define(
  "desakelurahans",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    koordinat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_kecamatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Kecamatan.hasMany(DesaKelurahan, {
    foreignKey: "id_kecamatan",
    as: "kecamatan",
  });
  DesaKelurahan.belongsTo(Kecamatan, {
    foreignKey: "id_kecamatan",
  });

export default DesaKelurahan;
