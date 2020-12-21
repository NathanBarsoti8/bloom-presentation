const express = require('express');
const router = express.Router();

router.post('', require('../services/customers/create'));
router.get('/:id', require('../services/customers/listOne'));
router.put('/:id', require('../services/customers/update'));
router.put('/:id/delete', require('../services/customers/delete'));

module.exports = router;