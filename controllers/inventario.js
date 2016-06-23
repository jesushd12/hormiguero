'use strict';
var Eureca = require('eureca.io');

module.exports = class Inventario{

		// Las especificaciones vienen en formato JSON
	constructor(especificaciones) {
	    this.tipoComida = especificaciones.tipoComida;
	    this.cantidad = especificaciones.cantidad;
	 }

	 get obtenerTipoComida(){
	 	return this.tipoComida;
	 }

	 get cantidad(){
	 	return this.cantidad;
	 }


	 compararComida(tipoComida){
	 	if(this.tipoComida == tipoComida)
	 		return true;
	 }


} ;
