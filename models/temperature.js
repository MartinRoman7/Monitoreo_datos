/**
 * temperature.js
 * Script con modelo para la tabla de temperature.
 * Autor: Oscar Martín Arcos Román
 */

// Declaración de requerimientos
const mongoose = require('mongoose');

// Esquema de entidades
var Temperature_Schema = mongoose.Schema({
    id: {                   // ID
        type: String
    },
    fecha: {                // Fecha
        type: String
    },
    hora: {                 // Hora
        type: String
    },
    temperature_1: {        // Dato 1
        type: String
    },
    temperature_2: {        // Dato 2
        type: String
    }
});

// Apartado de directorio /routes
var Temperature = module.exports = mongoose.model('temperature', Temperature_Schema);

// Busqueda de temperatura por id
module.exports.searchTemperatureID = function(query, callback) {
    console.log(query);
    Temperature.find(query, callback);
}