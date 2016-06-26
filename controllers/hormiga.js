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
	    this.ubicacionActual = especificaciones.ubicacionActual;
	    this.proximoDestino = especificaciones.proximoDestino;
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

	  get obtenerItinerario(){
	  	return this.itinerario;
	  }

	  set recibirCarga(comida){
	  	this.carga = this.carga + comida;
	  }

	set nuevaUbicacionActual(ubicacion){
		this.ubicacionActual = ubicacion;
	}

	get obtenerUbicacionActual(){
		return this.ubicacionActual;
	}
	
	set nuevaUbicacionActual(ubicacion){
		this.ubicacionActual = ubicacion;
	}


	buscarProximoDestino(){
		console.log('Tamano itinerario Hormiga Servidor'+this.itinerario.length);
		if(this.ubicacionActual<this.itinerario.length) {
			this.proximoDestino++; 
			return true; 
		}
		else { return false; }
	}

	get obtenerProximoDestino(){
		return this.proximoDestino;
	}

	set nuevoDestino(destino){
		return this.proximoDestino;
	}


	viajar(hormiga){
		let itinerario = this.itinerario;
		let proximoDestino = this.proximoDestino;
		this.ubicacionActual++;

		console.log('Ubicacion actual >', this.ubicacionActual);

		return new Promise(function(resolve,reject){
			var client = new Eureca.Client({ uri: 'http://'+itinerario[proximoDestino].ip+':'+itinerario[proximoDestino].puerto+'/' });
			
			//var client = new Eureca.Client({ uri: 'http://'+this.itinerario[this.proximoDestino].ip+':'+this.itinerario[this.proximoDestino].puerto+'/' });
			client.ready(function (serverProxy) {
	    		serverProxy.hello(hormiga)
	    		.then(function(hormigas) {
				  console.log('Regreso la  hormiga servidor con carga >'+ hormigas);
				  resolve(hormigas);
				 // console.log('Hormiga probando objetos[0]: '+ result.itinerario[0].puerto)
				});
			});
		});
		
	}
	

	} ;

