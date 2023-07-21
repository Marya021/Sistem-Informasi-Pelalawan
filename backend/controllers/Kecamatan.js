import Kecamatan from '../models/KecamatanModel.js';

export const getKecamatans = async(req, res) => {
    try {
        const response = await Kecamatan.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getKecamatanById = async(req, res) => {
    try {
        const response = await Kecamatan.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch {
        res.status(500).json({msg: error.message});
    }
}

export const createKecamatan = async(req, res) => {
  const { nama, koordinat } = req.body;
  try {
    await Kecamatan.create({
      nama: nama,
      koordinat: koordinat,
    });

    res.status(201).json({ msg: 'Kecamatan Berhasil didaftarkan' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

export const updateKecamatan = async(req, res) => {
    const kecamatan = await Kecamatan.findOne({
        where: {
            uuid: req.params.id
        }
    });
    const { nama, koordinat } = req.body;
    try{
        await Kecamatan.update({
            nama: nama,
            koordinat: koordinat
        },{
            where:{
                id: kecamatan.id
            }
        });
        res.status(200).json({msg: "Kecamatan Updated"});
    } catch {
        res.status(400).json({msg: error.message});
    }
}


export const deleteKecamatan = async(req, res) => {
    const kecamatan = await Kecamatan.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!kecamatan) return res.status(404).json({msg: "Kecamatan tidak ditemukan"});
    try {
        await Kecamatan.destroy({
            where:{
                id: kecamatan.id
            }
        });
        res.status(200).json({msg: "Kecamatan Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
