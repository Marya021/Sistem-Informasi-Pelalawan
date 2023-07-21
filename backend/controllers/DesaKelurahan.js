import DesaKelurahan from "../models/DesaKelurahanModel.js";
import Kecamatan from "../models/KecamatanModel.js";

export const getDesaKelurahans = async (req, res) => {
  try {
    const response = await DesaKelurahan.findAll({
        include:[{
            model: Kecamatan,
            attributes:['nama']
        }]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDesaKelurahanById = async (req, res) => {
  try {
    const response = await DesaKelurahan.findOne({
      where: {
        uuid: req.params.id,
      },
      include:[{
        model: Kecamatan,
        attributes:['nama']
    }]
    });
    res.status(200).json(response);
  } catch {
    res.status(500).json({ msg: error.message });
  }
};

export const createDesaKelurahan = async (req, res) => {
  const { nama, koordinat, type, nama_kecamatan } = req.body;
  const kecamatan = await Kecamatan.findOne({
    where: {
      nama: nama_kecamatan,
    },
  });
  if (!kecamatan)
    return res.status(404).json({ msg: "kecamatan tidak ditemukan" });
  try {
    await DesaKelurahan.create({
      nama: nama,
      koordinat: koordinat,
      type: type,
      id_kecamatan: kecamatan.id
    });

    res.status(201).json({ msg: "DesaKelurahan Berhasil didaftarkan" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateDesaKelurahan = async (req, res) => {
  const desakelurahan = await DesaKelurahan.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  const { nama, koordinat, type, nama_kecamatan } = req.body;
  const kecamatan = await Kecamatan.findOne({
    where: {
      nama: nama_kecamatan,
    },
  });
  if (!kecamatan)
    return res.status(404).json({ msg: "kecamatan tidak ditemukan" });
  try {
    await DesaKelurahan.update(
      {
        nama: nama,
        koordinat: koordinat,
        type: type,
        id_kecamatan: kecamatan.id
      },
      {
        where: {
          id: desakelurahan.id
        },
      }
    );
    res.status(200).json({ msg: "DesaKelurahan Updated" });
  } catch {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDesaKelurahan = async (req, res) => {
  const desakelurahan = await DesaKelurahan.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!desakelurahan)
    return res.status(404).json({ msg: "DesaKelurahan tidak ditemukan" });
  try {
    await DesaKelurahan.destroy({
      where: {
        id: desakelurahan.id,
      },
    });
    res.status(200).json({ msg: "DesaKelurahan Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
