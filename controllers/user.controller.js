const dinoUser = require("../models/dinosaurs.data.js");
const mongoose = require('mongoose');

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
        var nameX = req.query.name
        var search = await dinoUser.find({name: nameX})
        if (search.length > 0) {
            res.status(500).json({message: 'username have already been used.'})
        } else {
            const makeDinosaur = await dinoUser.create(req.query);
            res.status(200).json(makeDinosaur)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const loginProfile = async (req, res) => {
    try {
        var nameX = req.query.name
        var passX = req.query.password
        var search = await dinoUser.find({name: nameX, password: passX})
        if (search.length > 0) {
            res.send("User found! Logged in!")
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
        res.status(200).json(profileDinosaur)
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
        res.status(200).json(profileDinosaurUpdate)
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
        res.status(200).json({message: "User Deleted successfully!"})
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