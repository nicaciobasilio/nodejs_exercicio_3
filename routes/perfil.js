const express = require('express');
const { Perfil } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Perfil.find({}).then((perfis) => {
        res.render('perfil/index', {
            perfis: perfis,
        });
    });
});

module.exports = router;