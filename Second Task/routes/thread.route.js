const express = require('express')
const router = express.Router()
const {viewAllForums, createForums, viewOneForum, updateForums, deleteForums} = require('../controllers/thread.controller.js')

router.post('/create', createForums);
router.get('/', viewAllForums);
router.get('/:id', viewOneForum);
router.put('/update/:id', updateForums);
router.delete('/delete/:id', deleteForums);

module.exports = router;