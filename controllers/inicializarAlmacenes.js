var Almacen = require('./almacen.js');
var almacenes = [];

var almacen1 = {
						puerto:"8000",
						ip:"127.0.0.1",
						inventario:[
							{tipoComida:"yuca",cantidad:50},
							{tipoComida:"cambur",cantidad:50},
							{tipoComida:"lagartosinhueso",cantidad:10},
						],
						idAlmacen:1
					};
var almacen2 = {
						puerto:"8001",
						ip:"127.0.0.1",
						inventario:[
							{tipoComida:"mango",cantidad:50},
							{tipoComida:"pepino",cantidad:20},
							{tipoComida:"cuca",cantidad:10}
						],
						idAlmacen:2
					};
var almacen3 = {
						puerto:"8003",
						ip:"127.0.0.1",
						inventario:[
							{tipoComida:"yuca",cantidad:100},
							{tipoComida:"pepino",cantidad:20},
							{tipoComida:"cuca",cantidad:10}
						],
						idAlmacen:3
};
var almacen4 = {
						puerto:"8002",
						ip:"127.0.0.1",
						inventario:[
							{tipoComida:"yuca",cantidad:30},
							{tipoComida:"pepino",cantidad:20},
							{tipoComida:"cuca",cantidad:10}
						],
						idAlmacen:3
};

almacenes.push(almacen1);
almacenes.push(almacen2);
almacenes.push(almacen3);
almacenes.push(almacen4);
module.exports.almacenes = almacenes;

