'use strict';
var express = require('express');
var funciones = require('../controllers/funcionesServidorPrincipal.js');
var almacenes = require('../controllers/inicializarAlmacenes.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/almacenes', function(req, res, next) {
  //res.render(" "+almacenes.almacenes);
  //console.log(almacenes);
  var itinerario = funciones.buscarItinerario("yuca");
  console.log(JSON.stringify(itinerario));
});


router.get('/pedido',function(req,res,next){

	var pedido = {
			"Pedido":[
<<<<<<< HEAD
				{"tipo":"LagartoSinHueso", "cantidad":5},
=======
				//{"tipo":"yuca", "cantidad":5},
>>>>>>> origin/master
				{"tipo":"yuca", "cantidad":1}
			]
		};

	funciones.recibirPedido(pedido);
});

module.exports = router;
