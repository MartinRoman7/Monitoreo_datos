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
    
    res.set('Content-Type','text/plain; version=0.0.4; charset=utf-8').send(`
    # HELP mongodb_exporter_last_scrape_duration_seconds Duration of the last scrape of metrics from MongoDB.\n
    # TYPE mongodb_exporter_last_scrape_duration_seconds gauge\n
    mongodb_exporter_last_scrape_duration_seconds 0.003035248
    `);

});

// Exportar modulo
module.exports = router;