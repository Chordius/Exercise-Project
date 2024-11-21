const dinoUser = require("../models/dinosaurs.data.js");
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    try {
        var search = await dinoUser.find({})
        res.status(500).json(search)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createAccount = async (req, res) => {
    try {
        var nameX = req.query.name;
        var search = await dinoUser.find({name: nameX})
        var userPassword = req.query.password;
        const hash = bcrypt.hashSync(userPassword, 10);
        if (search.length > 0) {
            res.status(500).json({message: 'username have already been used.'})
        } else {
            const makeDinosaur = await dinoUser.create({name: req.query.name, password: hash});
            res.status(200).json({success: 'true', message: 'true', data: makeDinosaur})
        }
    } catch (error) {
        res.status(500).json({success: 'false', message: error.message})
    }
}

const loginProfile = async (req, res) => {
    try {
        var nameX = req.query.name
        var passX = req.query.password
        var search = await dinoUser.find({name: nameX})
        var hashedPassword = search[0].password
        var passwordTrue = bcrypt.compareSync(passX, hashedPassword);
        if (search.length > 0 && passwordTrue) {
            if (search.length > 0) {
                res.status(200).json({success: 'true', message: 'true', data: search[0]})
            } else {
                res.status(500).json({message: 'username/password may be incorrect.'})
            }
        } else {
            res.status(500).json({message: 'username/password may be incorrect.'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const accountProfileId = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaur = await dinoUser.findById(id);
        res.status(200).json({success: 'true', message: 'true', data: profileDinosaur})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const accountUpdateProfileId = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaur = await dinoUser.findByIdAndUpdate(id, req.body);
        if (!profileDinosaur) {
            return res.status(404).json({message: "User not found"})
        }
        const profileDinosaurUpdate = await dinoUser.findById(id);
        res.status(200).json({success: 'true', message: 'true', data: profileDinosaurUpdate})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProfileId = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaurDelete = await dinoUser.findByIdAndDelete(id);
        if (!profileDinosaurDelete) {
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({success: 'true', message: "User Deleted successfully!", data: profileDinosaurDelete})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getUser, 
    createAccount, 
    loginProfile, 
    accountProfileId, 
    accountUpdateProfileId, 
    deleteProfileId
}