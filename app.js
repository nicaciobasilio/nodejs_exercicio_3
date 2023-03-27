const express = require('express');
const path = require('path');
const multer = require('multer');

const routerPrincial = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfil = require('./routes/perfil');

const app = express();
const porta = 3000;

// configurando multer
const upload = multer({ dest: 'uploads/' });

// configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routers
app.use('/perfil', routerPerfil);
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincial);

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
})