/**
 * server.js
 * Script principal para la ejecución del sistema.
 * 
 * Autor: Oscar Martín Arcos Román
 */

// Declaración de requerimientos
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var mongoose = require('mongoose');

// Comunicación a base de datos MongoDB
mongoose.connect("mongodb://mongodb:FundacionCSMongoDB@157.230.153.234:27017/cadena_frio", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;

// Declaración de rutas 
var routes = require('./routes/index');

// Inicialización de app
var app = express();

// Motor de las vistas
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Directorios estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Sesión express
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


// Direcciones raiz
app.use('/', routes);

// Indicación de puerto
app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
    console.log('Servidor escuchando en puerto ' + app.get('port'));
});
