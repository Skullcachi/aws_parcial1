const express = require('express');
const router = express.Router();

const eleccionesController  = require('../controllers/eleccionesController');

router.get('/home', eleccionesController.list);
router.get('/', eleccionesController.list);

module.exports = router;