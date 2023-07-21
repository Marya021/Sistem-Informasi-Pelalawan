import Stunten from "../models/StuntenModel.js";
import path from "path"

export const getStuntens = async(req, res) =>{
    try{
        const response = await Stunten.findAll();
        res.status(200).json(response);
    } catch(error) {
        console.log(error.message);
    }   

}
export const getStuntenById = async(req, res) =>{
    try{
        const response = await Stunten.findOne({
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error) {
        console.log(error.message);
    }   
}
export const saveStunten = (req, res) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    // const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const timestamp = new Date().toISOString().replace(/:/g, '-').slice(0, 19).replace('T', '_');
    const fileName = timestamp + "_" + file.name;
    const url = `${req.protocol}://${req.get("host")}/stunten/${fileName}`;
    const allowedType = ['.csv'];
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Excel"});
    file.mv(`./public/stunten/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Stunten.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Excel Uploaded Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}
export const updateStunten = (req, res) => {
    
}
export const deleteStunten = (req, res) => {
    
}

