'use strict';
var Hormiga = require('./hormiga.js');
var Almacen = require('./almacen.js');

var almacenes = require('./inicializarAlmacenes.js');



var generarPesoMaximo = (hormigasActivas) =>  Math.floor(Math.random() * (hormigasActivas - 1 + 1) + 1);
var hormigasActivas = 1;
var idPedido = 0;

function generarHormiga(especificaciones){
	var hormiga = new Hormiga(especificaciones);
	console.log('Hormiga > Tipo comida' + hormiga.obtenerTipoComida + 'Encomienda >'+hormiga.obtenerEncomienda + 'Peso maximo > '+hormiga.obtenerEncomienda);
	hormigasActivas++;
	hormiga.viajar(hormiga);
}



function devolverCantidadComida(obj,tipoComida){
	obj.inventario.forEach(function(inventario){
			if(inventario.tipoComida == tipoComida){
				console.log("Cantidad Comida: "+inventario.cantidad);
				return inventario.cantidad;
			}
	});
}

function swap(myArr, indexOne, indexTwo){
  var tmpVal = myArr[indexOne];
  myArr[indexOne] = myArr[indexTwo];
  myArr[indexTwo] = tmpVal;
  return myArr;
}

function quicksort(data,tipoComida) {
    if (data.length == 0) return [];
  
    var left = [], right = [], pivot = data[0];
  
    for (var i = 1; i < data.length; i++) {
        if(devolverCantidadComida(data[i],tipoComida) < devolverCantidadComida(pivot,tipoComida))
            left.push(data[i])
        else
            right.push(data[i]);
    }
  
    return quicksort(left,tipoComida).concat(pivot, quicksort(right,tipoComida));
}

function bubbleSortItinerario(myArr,tipoComida){
  var size = myArr.length;
  for( var pass = 1; pass < size; pass++ ){ // outer loop
    for( var left = 0; left < (size - pass); left++){ // inner loop
      var right = left + 1;

      var cantLeft = 0;
      var cantRight = 0;
      myArr[left].inventario.forEach(function(inventario){
			if(inventario.tipoComida == tipoComida){
			   cantLeft = inventario.cantidad;
			}
		}); 
      myArr[right].inventario.forEach(function(inventario){
			if(inventario.tipoComida == tipoComida){
				cantRight = inventario.cantidad;
			}
		}); 
      if(cantLeft < cantRight){
        var tmpVal = myArr[left];
		myArr[left] = myArr[right];
		myArr[right] = tmpVal;
      }
    }
  }
  return myArr;
}

function buscarItinerario(tipocomida){
	var itinerario = [];
	almacenes.almacenes.forEach(function(almacen){
		almacen.inventario.forEach(function(inventario){
			if(inventario.tipoComida == tipocomida)
				itinerario.push(almacen);
		});
	});
	console.log("Bubble: "+JSON.stringify(bubbleSortItinerario(itinerario,tipocomida)));
	return quicksort(itinerario,tipocomida);
}



function recibirPedido(pedido){
	pedido.Pedido.forEach(function(item){
		console.log(item.tipo);
		console.log(item.cantidad);
		var tipoComida = item.tipo;
		var cantidad = item.cantidad;
		var encomienda = cantidad;
		var encomiendaHormiga = 0;
		var pesoMaximo = 0 ;
		while(encomienda!=0){
			pesoMaximo = generarPesoMaximo(hormigasActivas);
			console.log('PesoMaximo ='+pesoMaximo);
			if(encomienda<=pesoMaximo){
				encomiendaHormiga = encomienda;
				encomienda=0;
			}else{
				encomiendaHormiga = pesoMaximo;
				encomienda = encomienda - pesoMaximo;
			}
			var especificaciones = {"tipoComida":tipoComida,"pesoMax":pesoMaximo,"carga":0,"itinerario":0,"inventario":0,"idPedido":idPedido,"idHormiga":0,"encomienda":encomiendaHormiga};
			generarHormiga(especificaciones);
		}
	});
	idPedido++;

}



module.exports.generarHormiga = generarHormiga;
module.exports.recibirPedido = recibirPedido;
module.exports.buscarItinerario= buscarItinerario;