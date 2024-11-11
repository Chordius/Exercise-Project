const dinoForums = require("../models/dinoforums.data.js");

const viewAllForums = async (req, res) => {
    try {
        var search = await dinoForums.find({})
        res.status(500).json(search)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createForums = async (req, res) => {
    try {
        const makeDinosaur = await dinoForums.create(req.body);
        res.status(200).json(makeDinosaur)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const viewOneForum = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaur = await dinoForums.findById(id);
        res.status(200).json(profileDinosaur)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateForums = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaur = await dinoForums.findByIdAndUpdate(id, req.body);
        if (!profileDinosaur) {
            return res.status(404).json({message: "User not found"})
        }
        const profileDinosaurUpdate = await dinoForums.findById(id);
        res.status(200).json(profileDinosaurUpdate)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteForums = async (req, res) => {
    try {
        const { id } = req.params;
        const profileDinosaurDelete = await dinoForums.findByIdAndDelete(id);
        if (!profileDinosaurDelete) {
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({message: "User Deleted successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    viewAllForums, 
    createForums, 
    viewOneForum, 
    updateForums,
    deleteForums
}