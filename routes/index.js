/**
 * index.js
 * Script donde se declara la dirección raiz (/). 
 * Autor: Oscar Martín Arcos Román
 */

// Declaración de requerimientos
const express = require('express');
const router = express.Router();
var cmd = require('node-cmd');

// Prometheus
const client = require('prom-client');
const register = new client.Registry();

// Zoom API
var request = require("request");

// CMD - Python
var cmd = require('node-cmd');

// Página principal
router.get('/', (req, res) => {
    
    res.render('index', { title: 'Página de inicio' });

});

/*router.get('/metrics', (req, res) => {
    
    res.setHeader("Content-Type", "text/plain; version=0.0.4; charset=utf-8");
    res.send(`
    # HELP temperature Temperatura actual.\n
    # TYPE temperature gauge\n
    temperature 0.003035248
    `);

});*/

// Revisar estado cada 5 segundos
const intervalCollector = client.collectDefaultMetrics({prefix: 'node_', timeout: 5000, register});

 const gauge = new client.Gauge({
    name: "temperature",
    help: "Último dato de temperatura registrado"
 });
 
register.registerMetric(gauge);

const rand = (low, high) => Math.random() * (high - low) + low;

gauge.set(25.39);

/*setInterval(() => {
   counter.inc(rand(0, 1));
   gauge.set(rand(0, 15));
   histogram.observe(rand(0,10));
   summary.observe(rand(0, 10));
}, 1000);*/

router.get('/metrics', (req, res) => {
   res.set('Content-Type', register.contentType);
   res.end(register.metrics());
});


// Exportar modulo
module.exports = router;