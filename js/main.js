(function() {
	"use strict";
 
 	document.addEventListener('DOMContentLoaded', function(){
	
		//Campos Datos usuarios
		var nombre = document.getElementById('nombre');
		var apellido = document.getElementById('apellido');
		var email = document.getElementById('email');
		
		//Campos pases
		var pase_dia = document.getElementById('pase_dia');
		var pase_dosdias = document.getElementById("pase_dosdias");
		var pase_completo = document.getElementById("pase_completo");
		
		//Botones y divs
		var calcular = document.getElementById('calcular');
		var errorDiv = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var listado_productos = document.getElementById('lista-productos');
		var suma = document.getElementById('suma-total');
		
		
		//Extras
		
		var camisas = document.getElementById('camisa_evento');
		var etiquetas= document.getElementById('etiquetas');
		
		calcular.addEventListener(`click`,calcularMontos);
		pase_dia.addEventListener('blur',mostrarDias);
		pase_dosdias.addEventListener('blur',mostrarDias);
		pase_completo.addEventListener('blur',mostrarDias);
		
		function calcularMontos(event){
			event.preventDefault();
			//console.log("has hecho click en calcular");
			if(pase_dia.value === '' && pase_dosdias.value ==='' && pase_completo.value ===''){
				alert("Debes elegir un boleto");
				regalo.focus();
			}else {
				var boletosDia = parseInt(pase_dia.value, 10)||0;
				var	boletos2Dias= parseInt(pase_dosdias.value,10 )||0;
				var	boletoCompleto = parseInt(pase_completo.value,10 )||0;
				var cantCamisas = parseInt(camisas.value,10 )||0;
				var cantEtiquetas = parseInt(etiquetas.value,10 )||0;
				
				var totalPagar = (boletosDia*30)+(boletos2Dias*45)+(boletoCompleto*50)+((cantCamisas*10)*0.93)+(cantEtiquetas*2);
				console.log(totalPagar);
				
				var listadoProductos= [];
				if(boletosDia >=1){
					listadoProductos.push(boletosDia +' Pases por día');
				}
				if(boletos2Dias >=1){
					listadoProductos.push(boletos2Dias +' Pases por 2 días');
				}
				if(boletoCompleto >=1){
				listadoProductos.push(boletoCompleto +' Pases completos');
			 	}
				if(cantCamisas >=1){
					listadoProductos.push(cantCamisas +' Camisas');
				}
				if(cantEtiquetas >=1){
					listadoProductos.push(cantEtiquetas +' Paquetes de etiquetas');
				}
				listado_productos.style.display ='block';
				listado_productos.innerHTML ='';
				for(var i=0 ; i< listadoProductos.length ; i++){
					listado_productos.innerHTML += listadoProductos[i]+'<br/>';
				}
				suma.innerHTML = '$'+ totalPagar.toFixed(2);
				
				
				console.log(listadoProductos);
			}
		}
		
		function mostrarDias(){
			var boletosDia = parseInt(pase_dia.value, 10)||0;
				var	boletos2Dias= parseInt(pase_dosdias.value,10 )||0;
				var	boletoCompleto = parseInt(pase_completo.value,10 )||0;
			
			var diasElegidos = [];
			
			if(boletosDia >=1){
				diasElegidos.push('viernes');
			}
			if(boletos2Dias >=1){
				diasElegidos.push('viernes','sabado');
			}
			if(boletoCompleto >=1){
				diasElegidos.push('viernes','sabado','domingo');
			}
			for(var i=0 ; i<diasElegidos.length;i++){
				document.getElementById(diasElegidos[i]).style.display = 'block';
			}
		}
	
    }); //DOM CONTENT LOADED
})();