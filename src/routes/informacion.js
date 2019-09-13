const express = require('express');
const router = express.Router();

router.get('/form',(req ,res) => {
    res.render('informacion/form_sai');
});

module.exports = router;