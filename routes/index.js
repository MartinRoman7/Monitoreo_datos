/**
 * index.js
 * Script donde se declara la dirección raiz (/). 
 * Autor: Oscar Martín Arcos Román
 */

// Declaración de requerimientos
const express = require('express');
const router = express.Router();
var cmd = require('node-cmd');

// Zoom API
var request = require("request");

// CMD - Python
var cmd = require('node-cmd');

// Página principal
router.get('/', (req, res) => {
    
    res.render('index', { title: 'Página de inicio' });

});

router.get('/metrics', (req, res) => {
    
    res.set('Content-Type','text/plain').send(`
        # TYPE temperature gauge\n
        temperature{state=\"total\"} 25.39
    `);

});

// Exportar modulo
module.exports = router;