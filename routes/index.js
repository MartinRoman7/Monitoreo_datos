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

// Modelos
const Temperature = require('../models/temperature');

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



/*setInterval(() => {
   counter.inc(rand(0, 1));
   gauge.set(rand(0, 15));
   histogram.observe(rand(0,10));
   summary.observe(rand(0, 10));
}, 1000);*/

router.get('/metrics', (req, res) => {

    Temperature.searchTemperatureID({ id: "00000000f37ffdbb" }, (err, result) => {
        if (err) throw err;

        var longitud = result.length;
        console.log(longitud)
        var longitud_last = (Number(longitud) - Number(1)).valueOf();
        var temperature_1 = result[longitud_last].temperature_1;
        var temperature_2 = result[longitud_last].temperature_2;
        console.log(temperature_1)
        console.log(temperature_2)

        const gauge_temp1 = new client.Gauge({
            name: "temperature_1",
            help: "Último dato de temperatura uno registrado"
        });
         
        const gauge_temp2 = new client.Gauge({
            name: "temperature_2",
            help: "Último dato de temperatura dos registrado"
        });
        
        register.registerMetric(gauge_temp1);
        register.registerMetric(gauge_temp2);
        
        gauge_temp1.set(Number(temperature_1));
        gauge_temp2.set(Number(temperature_2));

        res.set('Content-Type', register.contentType);
        res.end(register.metrics());
    });
});


// Exportar modulo
module.exports = router;