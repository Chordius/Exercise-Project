const express = require('express')
const router = express.Router()
const {getUser, createAccount, loginProfile, accountProfileId, accountUpdateProfileId, deleteProfileId} = require('../controllers/user.controller.js')

router.post('/account/create', createAccount);
router.get('/database/12345/allProfile', getUser);
router.get('/account/login', loginProfile);
router.get('/user-profile/:id', accountProfileId);
router.put('/user-profile/:id', accountUpdateProfileId);
router.delete('/account/delete/:id', deleteProfileId);

module.exports = router;