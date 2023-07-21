import Miskin from "../models/MiskinModel.js";
import { Op } from 'sequelize';

export const getMiskins = async(req, res) => {
    try {
        const response = await Miskin.findAll();
        res.status(200).json(response);
    } catch {
        res.status(500).json({msg: error.message});
    }
    
}

export const getMiskinById = async(req, res) => {
    try {
        const response = await Miskin.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch {
        res.status(500).json({msg: error.message});
    }
}

export const getMiskinByKec = async(req, res) => {
    try {
        const response = await Miskin.findAll({
            nama_kecamatan: {
                [Op.like]: `%${req.params.nama_kecamatan}%`,
              },
        });
        res.status(200).json(response);
    } catch {
        res.status(500).json({msg: error.message});
    }
}

export const createMiskin = async(req, res) => {
    const {nama_kecamatan, jumlah_penduduk_miskin, rw} = req.body;
    try{
        await Miskin.create({
            nama_kecamatan: nama_kecamatan,
            jumlah_penduduk_miskin: jumlah_penduduk_miskin,
            rw: rw 
        })
        res.status(201).json({msg: "Data berhasil masuk"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateMiskin = async(req, res) => {
    const miskin = await Miskin.findOne({
        where: {
            uuid: req.params.id
        }
    });
    const {nama_kecamatan, jumlah_penduduk_miskin, rw} = req.body;
    try{
        await Miskin.update({
            nama_kecamatan: nama_kecamatan,
            jumlah_penduduk_miskin: jumlah_penduduk_miskin,
            rw: rw
        },{
            where:{
                id: miskin.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error){
        res.status(400).json({msg: error.message});
    }
}


export const deleteMiskin = async(req, res) => {
    const miskin = await Miskin.findOne({
        where: {
            uuid: req.params.id
        }
    });
    try {
        await Miskin.destroy({
            where:{
                id: miskin.id
            }
        });
        res.status(200).json({msg: "Miskin Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
