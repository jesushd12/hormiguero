'use strict';
var Eureca = require('eureca.io');

module.exports = class Hormiga{

		// Las especificaciones vienen en formato JSON
		constructor(especificaciones) {
	    this.tipoComida = especificaciones.tipoComida;
	    this.pesoMax = especificaciones.pesoMax;
	    this.carga = especificaciones.carga;
	    this.itinerario = especificaciones.itinerario;
	    this.inventario = especificaciones.inventario;
	    this.idPedido = especificaciones.idPedido;
	    this.idHormiga = especificaciones.idHormiga;
	    this.encomienda = especificaciones.encomienda;
	  }

	  get obtenerTipoComida(){
	  	return this.tipoComida;
	  }

	   get obtenerEncomienda(){
	  	return this.encomienda;
	  }

	    get obtenerPesoMaximo(){
	  	return this.pesoMax;
	  }
	   get obtenerCarga(){
	  	return this.carga;
	  }

	  set recibirCarga(comida){
	  	this.carga = this.carga + comida;
	  }


	viajar(hormiga){

		var client = new Eureca.Client({ uri: 'http://localhost:8000/' });
		client.ready(function (serverProxy) {
    		serverProxy.hello(hormiga).onReady(function(result) {
			  console.log('Regreso la  hormiga con carga >', result);
			});
		});
	}
	

	} ;

