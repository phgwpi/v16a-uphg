// Convertidor | phgwpi APPS

   function menu(seleccionado){
	if (seleccionado.ad.selectedIndex != 0){
	document.location=seleccionado.ad.options[seleccionado.ad.selectedIndex].value;
		}
	} 

	function borrando(form){borrar = form.reset();}

	<!-- LONGITUD________________________________________________________________________________ -->
	function mil() {
   var operando1 = document.flongitud.operando1.value
   var resultce = (operando1*0.1)
   var resultmet = (operando1*0.001)
   var resultpi = (operando1*0.00328)
   var resulty = (operando1*0.00109)
   var resultp = (operando1*0.03937)

   document.flongitud.resultado.value = "  " + operando1 + " milímetros es igual a: \n " + resultce.toFixed(2) + " centímetros.\n " + resultmet.toFixed(2) + " metros.\n " + resultpi.toFixed(2) + " piés.\n " + resulty.toFixed(2) + " yardas.\n " + resultp.toFixed(2) + " pulgadas.\n "
	}

	function cen() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*10)
   var resultmet = (operando1*0.01)
   var resultpi = (operando1*0.03281)
   var resulty = (operando1*0.01094)
   var resultp = (operando1*0.39370)

   document.flongitud.resultado.value = "  " + operando1 + " centímetros es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultmet.toFixed(2) + " metros.\n " + resultpi.toFixed(2) + " piés.\n " + resulty.toFixed(2) + " yardas.\n " + resultp.toFixed(2) + " pulgadas.\n "
	}

	function pul() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*25.4000)
   var resultmet = (operando1*0.02540)
   var resultpi = (operando1*0.08333)
   var resulty = (operando1*0.02778)
   var resultce = (operando1*2.54000)

   document.flongitud.resultado.value = "  " + operando1 + " pulgadas es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultmet.toFixed(2) + " metros.\n " + resultpi.toFixed(2) + " piés.\n " + resulty.toFixed(2) + " yardas.\n " + resultce.toFixed(2) + " centímetros.\n "
	}

	function metro() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*1000)
   var resultp = (operando1*39.3701)
   var resultpi = (operando1*3.28084)
   var resulty = (operando1*1.09361)
   var resultce = (operando1*100)
   var resultmi = (operando1*0.00054)
   var resultn = (operando1*0.00062)
   var resultk = (operando1*0.001)

   document.flongitud.resultado.value = "  " + operando1 + " metros es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultp.toFixed(2) + " pulgadas.\n " + resultpi.toFixed(2) + " piés.\n " + resulty.toFixed(2) + " yardas.\n " + resultce.toFixed(2) + " centímetros.\n " + resultmi.toFixed(2) + " millas terrestres\n "  + resultn.toFixed(2) +  " millas naúticas\n " + resultk.toFixed(2) + " Kilómetros "
	}

   function pie() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*304.800)
   var resultp = (operando1*12)
   var resultmet = (operando1*0.30480)
   var resulty = (operando1*0.33333)
   var resultce = (operando1*30.4800)
   var resultmi = (operando1*0.00019)
   var resultn = (operando1*0.00016)
   var resultk = (operando1*0.00030)

   document.flongitud.resultado.value = "  " + operando1 + " piés es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultp.toFixed(2) + " pulgadas.\n " + resultmet.toFixed(2) + " metros.\n " + resulty.toFixed(2) + " yardas.\n " + resultce.toFixed(2) + " centímetros.\n " + resultmi.toFixed(2) + " millas terrestres\n "  + resultn.toFixed(2) +  " millas naúticas\n " + resultk.toFixed(2) + " Kilómetros "
	}

	function km() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*1000000)
   var resultp = (operando1*39370.1)
   var resultpi = (operando1*3280.84)
   var resultmet = (operando1*1000)
   var resulty = (operando1*1093.61)
   var resultce = (operando1*100000)
   var resultmi = (operando1*0.62137)
   var resultn = (operando1*0.54)

   document.flongitud.resultado.value = "  " + operando1 + " kilómetros es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultp.toFixed(2) + " pulgadas.\n " + resultmet.toFixed(2) + " metros.\n " + resultpi.toFixed(2) + " piés.\n " + resulty.toFixed(2) + " yardas.\n " + resultce.toFixed(2) + " centímetros.\n " + resultmi.toFixed(2) + " millas terrestres\n "  + resultn.toFixed(2) +  " millas naúticas "
	}

	function yarda() {
   var operando1 = document.flongitud.operando1.value
   var resultm =  (operando1*914.400)
   var resultp = (operando1*36.0000)
   var resultpi = (operando1*3.00000)
   var resultmet = (operando1*0.91440)
   var resultce = (operando1*91.4400)
   var resultmi = (operando1*0.00057)
   var resultn = (operando1*0.00049)
   var resultk = (operando1*0.00091)

   document.flongitud.resultado.value = "  " + operando1 + " yardas es igual a: \n " + resultm.toFixed(2) + " milímetros. \n " + resultp.toFixed(2) + " pulgadas.\n " + resultpi.toFixed(2) + " piés.\n " + resultmet.toFixed(2) + " metros.\n " + resultce.toFixed(2) + " centímetros.\n " + resultmi.toFixed(2) + " millas terrestres\n "  + resultn.toFixed(2) +  " millas naúticas\n " + resultk.toFixed(2) + " Kilómetros "
	}

	function milla() {
   var operando1 = document.flongitud.operando1.value
   var resultp = (operando1*63360.0)
   var resultpi = (operando1*5280.00)
   var resultmet = (operando1*1609.34)
   var resulty = (operando1*1760.00)
   var resultn = (operando1*0.86905)
   var resultk = (operando1*1.60934)

   document.flongitud.resultado.value = "  " + operando1 + " Millas terrestres es igual a: \n "  + resultp.toFixed(2) + " pulgadas.\n " + resultpi.toFixed(2) + " piés.\n " + resultmet.toFixed(2) + " metros.\n "  + resulty.toFixed(2) + " yardas.\n "  + resultn.toFixed(2) +  " millas naúticas\n " + resultk.toFixed(2) + " Kilómetros "
	}

	function millanau() {
   var operando1 = document.flongitud.operando1.value
   var resultp = (operando1*72907.6)
   var resultpi = (operando1*6075.63)
   var resultmet = (operando1*1851.85)
   var resulty = (operando1*2025.21)
   var resultmi = (operando1*1.15069)
   var resultk = (operando1*1.85185)

   document.flongitud.resultado.value = "  " + operando1 + " Millas marinas es igual a: \n "  + resultp.toFixed(2) + " pulgadas.\n " + resultpi.toFixed(2) + " piés.\n " + resultmet.toFixed(2) + " metros.\n "  + resulty.toFixed(2) + " yardas.\n "  + resultmi.toFixed(2) + " millas terrestres\n " + resultk.toFixed(2) + " Kilómetros "
	}

	<!-- PESO______________________________________________________________________________________________________ -->

	function ki() {
   var operando1 = document.fpoid.operando1.value
   var resultgr = (operando1*1000)
   var resultdecagr = (operando1*100)
   var resultmgr = (operando1*1000000)
   var resultlibra = (operando1*2.20462)
   var resultonza = (operando1*35.2740)
   var resulttone = (operando1*0.001)
   var resulttoneme = (operando1*0.00098)

   document.fpoid.resultado.value = "  " + operando1 + " kilogramos es igual a: \n "  + resultgr.toFixed(2) + " gramos.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultmgr.toFixed(2) + " miligramos.\n " + resultlibra.toFixed(2) + " libras.\n " + resultonza.toFixed(2) + " onzas.\n " + resulttone.toFixed(2) + " toneladas.\n " + resulttoneme.toFixed(2) + " toneladas métricas. "
   }

  function gra() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*0.001)
   var resultdecagr = (operando1*0.1)
   var resultmgr = (operando1*1000)
   var resultlibra = (operando1*0.00220)
   var resultonza = (operando1*0.03527)

   document.fpoid.resultado.value = "  " + operando1 + " gramos es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultmgr.toFixed(2) + " miligramos.\n " + resultlibra.toFixed(2) + " libras.\n " + resultonza.toFixed(2) + " onzas.\n "
   }

   function de() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*0.01)
   var resultgr = (operando1*10)
   var resultmgr = (operando1*10000)
   var resultlibra = (operando1*0.02205)
   var resultonza = (operando1*0.35274)

   document.fpoid.resultado.value = "  " + operando1 + " decagramos es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultgr.toFixed(2) + " gramos.\n " + resultmgr.toFixed(2) + " miligramos.\n " + resultlibra.toFixed(2) + " libras.\n " + resultonza.toFixed(2) + " onzas.\n "
   }

   function li() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*0.45359)
   var resultgr = (operando1*453.593)
   var resultmgr = (operando1*453593)
   var resultdecagr = (operando1*45.3593)
   var resultonza = (operando1*16.0000)

   document.fpoid.resultado.value = "  " + operando1 + " libras es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultgr.toFixed(2) + " gramos.\n " + resultmgr.toFixed(2) + " miligramos.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultonza.toFixed(2) + " onzas.\n "
   }

   function on() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*0.02835)
   var resultgr = (operando1*28.3495)
   var resultmgr = (operando1*28349.5)
   var resultdecagr = (operando1*2.83495)
   var resultlibra = (operando1*0.06250)

   document.fpoid.resultado.value = "  " + operando1 + " onzas es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultgr.toFixed(2) + " gramos.\n " + resultmgr.toFixed(2) + " miligramos.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultlibra.toFixed(2) + " libras.\n "
   }

   function ton() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*1000)
   var resultgr = (operando1*1000000)
   var resultdecagr = (operando1*100000)
   var resultlibra = (operando1*2204.62)
   var resulttoneme = (operando1*0.98425)
   var resultonza = (operando1*35274.0)

   document.fpoid.resultado.value = "  " + operando1 + " toneladas es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultgr.toFixed(2) + " gramos.\n " + resulttoneme.toFixed(2) + " toneladas métricas.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultlibra.toFixed(2) + " libras.\n " + resultonza.toFixed(2) + " onzas.\n "
   }

   function tonm() {
   var operando1 = document.fpoid.operando1.value
   var resultkgr= (operando1*1016)
   var resultgr = (operando1*1016000)
   var resultdecagr = (operando1*101600)
   var resultlibra = (operando1*2239.90)
   var resulttone = (operando1*1.01600)
   var resultonza = (operando1*35838.3)

   document.fpoid.resultado.value = "  " + operando1 + " toneladas métricas es igual a: \n "  + resultkgr.toFixed(2) + " kilogramos.\n " + resultgr.toFixed(2) + " gramos.\n " + resulttone.toFixed(2) + " toneladas.\n " + resultdecagr.toFixed(2) + " decagramos.\n " + resultlibra.toFixed(2) + " libras.\n " + resultonza.toFixed(2) + " onzas.\n "
   }

	<!-- DISEÑO GRÁFICO __________________________________________________________________________________________-->

   function punto() {
   var operando1 = document.fdgr.operando1.value
   var resultpulgada= (operando1*0.01389)
   var resultpica = (operando1*0.08333)
   var resultcentimetro = (operando1*0.03528)
   var resultmilimetro = (operando1*0.35278)
   document.fdgr.resultado.value = "  " + operando1 + " puntos es igual a: \n "  + resultpulgada.toFixed(2) + " pulgadas.\n " + resultpica.toFixed(2) + " picas.\n " + resultcentimetro.toFixed(2) + " centímetros.\n " + resultmilimetro.toFixed(2) + " milímetros.\n "
   }

   function pulgada() {
   var operando1 = document.fdgr.operando1.value
   var resultpunto= (operando1*72.0000)
   var resultpica = (operando1*6.00000)
   var resultcentimetro = (operando1*2.54000)
   var resultmilimetro = (operando1*25.4000)
   document.fdgr.resultado.value = "  " + operando1 + " pulgadas es igual a: \n "  + resultpunto.toFixed(2) + " puntos.\n " + resultpica.toFixed(2) + " picas.\n " + resultcentimetro.toFixed(2) + " centímetros.\n " + resultmilimetro.toFixed(2) + " milímetros.\n "
   }

   function pica() {
   var operando1 = document.fdgr.operando1.value
   var resultpulgada= (operando1*0.16667)
   var resultpunto= (operando1*12)
   var resultcentimetro = (operando1*0.42333)
   var resultmilimetro = (operando1*4.23333)
   document.fdgr.resultado.value = "  " + operando1 + " picas es igual a: \n "  + resultpulgada.toFixed(2) + " pulgadas.\n " + resultpunto.toFixed(2) + " puntos.\n " + resultcentimetro.toFixed(2) + " centímetros.\n " + resultmilimetro.toFixed(2) + " milímetros.\n "
   }

   function centimetro() {
   var operando1 = document.fdgr.operando1.value
   var resultpulgada= (operando1*0.39370)
   var resultpica = (operando1*2.36220)
   var resultpunto= (operando1*28.3465)
   var resultmilimetro = (operando1*10.0000)
   document.fdgr.resultado.value = "  " + operando1 + " centímetros es igual a: \n "  + resultpulgada.toFixed(2) + " pulgadas.\n " + resultpica.toFixed(2) + " picas.\n " + resultpunto.toFixed(2) + " puntos.\n " + resultmilimetro.toFixed(2) + " milímetros.\n "
   }

   function milimetro() {
   var operando1 = document.fdgr.operando1.value
   var resultpulgada= (operando1*0.03937)
   var resultpica = (operando1*0.23622)
   var resultcentimetro = (operando1*0.10000)
   var resultpunto= (operando1*2.83465)
   document.fdgr.resultado.value = "  " + operando1 + " milímetros es igual a: \n "  + resultpulgada.toFixed(2) + " pulgadas.\n " + resultpica.toFixed(2) + " picas.\n " + resultcentimetro.toFixed(2) + " centímetros.\n " + resultpunto.toFixed(2) + " puntos.\n "
   }

   <!-- DISEÑO WEB____________________________________________________________________________________-- -->

   function ems() {
   var operando1 = document.fdweb.operando1.value
   var resultpixel = (operando1*16)
   var resultporcentaje = (operando1*100)
   var resultpunt= (operando1*12)
   document.fdweb.resultado.value = "  " + operando1 + " EM es igual a: \n "  + resultpixel.toFixed(2) + " pixeles.\n " + resultporcentaje.toFixed(2) + " %\n " + resultpunt.toFixed(2) + " puntos.\n "
   }

   function pixel() {
   var operando1 = document.fdweb.operando1.value
   var resultems = (operando1*0.0625)
   var resultporcentaje = (operando1*6.25)
   var resultpunt= (operando1*0.75)
   document.fdweb.resultado.value = "  " + operando1 + "  pixeles es igual a: \n "  + resultems.toFixed(2) + " EM.\n " + resultporcentaje.toFixed(2) + " %\n " + resultpunt.toFixed(2) + " puntos.\n "
   }

   function porcentaje() {
   var operando1 = document.fdweb.operando1.value
   var resultpixel = (operando1*0.16)
   var resultems = (operando1*0.01)
   var resultpunt= (operando1*0.12)
   document.fdweb.resultado.value = "  " + operando1 + " % es igual a: \n "  + resultpixel.toFixed(2) + " pixeles.\n " + resultems.toFixed(2) + " EM.\n " + resultpunt.toFixed(2) + " puntos.\n "
   }

   function punt() {
   var operando1 = document.fdweb.operando1.value
   var resultpixel = (operando1*1.33333)
   var resultporcentaje = (operando1*8.33333)
   var resultems = (operando1*0.08333)
   document.fdweb.resultado.value = "  " + operando1 + " puntos es igual a: \n "  + resultpixel.toFixed(2) + " pixeles.\n " + resultporcentaje.toFixed(2) + " %\n " + resultems.toFixed(2) + " EM.\n "
   }

   <!-- SUPERFICIE____________________________________________________________________________________________________- -->

   function mecua() {
   var operando1 = document.fsuperficie.operando1.value
   var resultarea= (operando1*0.01)
   var resultcecua = (operando1*10000)
   var resultmicua = (operando1*1000000)
   var resultpicua = (operando1*10.76)
   document.fsuperficie.resultado.value = "  " + operando1 + " m² es igual a: \n " + resultcecua.toFixed(2) + " cm².\n " + resultmicua 	.toFixed(2) + " mm².\n " + resultpicua.toFixed(2) + " pies²."
   }

   function kicua() {
   var operando1 = document.fsuperficie.operando1.value
   var resulthecta = (operando1*100)
   var resultarea= (operando1*10000)
   var resultacre= (operando1*247.1)
   var resultpicua = (operando1*10.76)
   var resultmecua = (operando1*1000000)
   document.fsuperficie.resultado.value = " " + operando1 + " Km² es igual a: \n " + resulthecta.toFixed(2) + " Ha.\n " + resultmecua.toFixed(2) + " m².\n " + resultarea.toFixed(2) + " áreas.\n " + resultacre.toFixed(2) + " acres.\n "
   }

   function hecta() {
   var operando1 = document.fsuperficie.operando1.value
   var resultkicua = (operando1*0.01)
   var resultmecua = (operando1*10000)
   var resultarea= (operando1*100)
   var resultacre= (operando1*2.471)
   var resultpicua = (operando1*107600)
   document.fsuperficie.resultado.value = " " + operando1 + " hectáreas es igual a: \n " + resultmecua.toFixed(2) + " m².\n " + resultkicua.toFixed(2) + " Km².\n " + resultarea.toFixed(2) + " áreas.\n " + resultacre.toFixed(2) + " acres.\n " + resultpicua.toFixed(2) + " pies²."
   }

   function area() {
   var operando1 = document.fsuperficie.operando1.value
   var resultkicua = (operando1*0.00010)
   var resulthecta = (operando1*0.01)
   var resultmecua = (operando1*100)
   var resultcecua = (operando1*1000000)
   var resultacre= (operando1*0.02471)
   var resultpicua = (operando1*1076)
   document.fsuperficie.resultado.value = " " + operando1 + " áreas es igual a: \n " + resulthecta.toFixed(2) + " Ha.\n " + resultkicua.toFixed(2) + " Km².\n " + resultmecua.toFixed(2) + " m².\n " + resultcecua.toFixed(2) + " cm².\n "  + resultacre.toFixed(2) + " acres.\n " + resultpicua.toFixed(2) + " pies²."
   }

   function cecua() {
   var operando1 = document.fsuperficie.operando1.value
   var resultmecua = (operando1*0.0001)
   var resultmicua = (operando1*100)
   var resultpicua = (operando1*0.00108)
   document.fsuperficie.resultado.value = " " + operando1 + " cm² es igual a: \n " + resultmecua.toFixed(2) + " m².\n " + resultmicua 	.toFixed(2) + " mm².\n " + resultpicua.toFixed(2) + " pies²."
   }

   function micua() {
   var operando1 = document.fsuperficie.operando1.value
   var resultcecua = (operando1*0.01)
   var resultpicua = (operando1*0.00001)
   document.fsuperficie.resultado.value = " " + operando1 + " mm² es igual a: \n " + resultcecua.toFixed(2) + " cm².\n " + resultpicua.toFixed(2) + " pies²."
   }

   function acre() {
   var operando1 = document.fsuperficie.operando1.value
   var resultkicua = (operando1*0.00405)
   var resulthecta = (operando1*0.40469)
   var resultarea= (operando1*40.4694)
   var resultmecua = (operando1*4046.94)
   var resultpicua = (operando1*43545.1)
   document.fsuperficie.resultado.value = " " + operando1 + " acres es igual a: \n " + resulthecta.toFixed(2) + " Ha.\n " + resultarea.toFixed(2) + " áreas.\n " + resultkicua.toFixed(2) + " Km².\n " + resultmecua.toFixed(2) + " m².\n " + resultpicua.toFixed(2) + " pies²."
   }

   function piecua() {
   var operando1 = document.fsuperficie.operando1.value
   var resulthecta = (operando1*0.00001)
   var resultarea= (operando1*0.00093)
   var resultcecua = (operando1*929.368)
   var resultmicua = (operando1*92936.8)
   var resultacre= (operando1*0.00002)
   var resultmecua = (operando1*0.09294)
   document.fsuperficie.resultado.value = " " + operando1 + " pies² es igual a: \n " + resulthecta.toFixed(2) + " Ha.\n " + resultarea.toFixed(2) + " áreas.\n " + resultcecua.toFixed(2) + " cm².\n " + resultmecua.toFixed(2) + " m².\n " + resultmicua.toFixed(2) + " mm².\n " + resultacre.toFixed(2) + " acres.\n "
   }

   <!-- ENERGÍA__________________________________________________________________________________________ -->

   function celcius() {
   var operando1 = document.fenergia.operando1.value
   var resultfahre = (operando1*9/5+32)
   document.fenergia.resultado.value = " " + operando1 + " grados celcius es igual a: \n " + resultfahre.toFixed(2) + " grados fahrenheit."
   }

   function fahre() {
   var operando1 = document.fenergia.operando1.value
   var resultfahre = ((operando1-32)*5/9)
   document.fenergia.resultado.value = " " + operando1 + " grados fahrenheit es igual a: \n " + resultfahre.toFixed(2) + " grados celcius."
   }

	<!-- CAPACIDAD__________________________________________________________________________________________ -->

   function litro() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.01)
   var resultmili= (operando1*1000)
   var resultmecubico = (operando1*0.001)
   var resultdecubico = (operando1*1)
   var resultcecubico= (operando1*1000)
   var resultonza = (operando1*33.81)
   var resultpiecubico= (operando1*0.03531)
   var resultpinta= (operando1*2.113)
   var resultgalon= (operando1*0.2642)
   document.fcapacidad.resultado.value = " " + operando1 + " litros es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function hecto() {
   var operando1 = document.fcapacidad.operando1.value
   var resultlitro = (operando1*100)
   var resultmili= (operando1*100000)
   var resultmecubico = (operando1*0.1)
   var resultdecubico = (operando1*100)
   var resultcecubico= (operando1*100000)
   var resultonza = (operando1*3381)
   var resultpiecubico= (operando1*3.531)
   var resultpinta= (operando1*211.3)
   var resultgalon= (operando1*26.4200)
   document.fcapacidad.resultado.value = " " + operando1 + " hectolitros es igual a: \n " + resultlitro.toFixed(2) + " litros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function mili() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.00001)
   var resultlitro = (operando1*0.001)
   var resultdecubico = (operando1*0.001)
   var resultcecubico= (operando1*1)
   var resultonza = (operando1*0.03381)
   var resultpiecubico= (operando1*0.00004)
   var resultpinta= (operando1*0.00211)
   var resultgalon= (operando1*0.00026)
   document.fcapacidad.resultado.value = " " + operando1 + " mililitros es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultlitro.toFixed(2) + " litros.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function mecubico() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*10)
   var resultmili= (operando1*1000000)
   var resultlitro = (operando1*1000)
   var resultdecubico = (operando1*1000)
   var resultcecubico= (operando1*1000000)
   var resultonza = (operando1*33810)
   var resultpiecubico= (operando1*35.31)
   var resultpinta= (operando1*2113)
   var resultgalon= (operando1*264.2)
   document.fcapacidad.resultado.value = " " + operando1 + " m³ es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultlitro.toFixed(2) + " litros.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function decubico() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.01)
   var resultmili= (operando1*1000)
   var resultmecubico = (operando1*0.001)
   var resultlitro = (operando1*1)
   var resultcecubico= (operando1*1000)
   var resultonza = (operando1*33.81)
   var resultpiecubico= (operando1*0.03531)
   var resultpinta= (operando1*2.113)
   var resultgalon= (operando1*0.2642)
   document.fcapacidad.resultado.value = " " + operando1 + " dm³ es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultlitro.toFixed(2) + " litros.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function cecubico() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.00001)
   var resultmili= (operando1*1)
   var resultdecubico = (operando1*0.001)
   var resultlitro = (operando1*0.001)
   var resultonza = (operando1*0.03381)
   var resultpiecubico= (operando1*0.00004)
   var resultpinta= (operando1*0.00211)
   var resultgalon= (operando1*0.00026)
   document.fcapacidad.resultado.value = " " + operando1 + " cm³ es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultlitro.toFixed(2) + " litros.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function onza() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.00030)
   var resultmili= (operando1*29.5770)
   var resultmecubico = (operando1*0.00003)
   var resultdecubico = (operando1*0.02958)
   var resultcecubico= (operando1*29.5770)
   var resultlitro = (operando1*0.02958)
   var resultpiecubico= (operando1*0.00104)
   var resultpinta= (operando1*0.06250)
   var resultgalon= (operando1*0.00781)
   document.fcapacidad.resultado.value = " " + operando1 + " onzas líquidas es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultlitro.toFixed(2) + " litros.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function piecubico() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.28321)
   var resultmili= (operando1*28320.6)
   var resultmecubico = (operando1*0.02832)
   var resultdecubico = (operando1*28.3206)
   var resultcecubico= (operando1*28320.6)
   var resultonza = (operando1*957.519)
   var resultlitro = (operando1*28.3206)
   var resultpinta= (operando1*59.8414)
   var resultgalon= (operando1*7.48230)
   document.fcapacidad.resultado.value = " " + operando1 + " pies³ es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultlitro.toFixed(2) + " litros.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function pinta() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.00473)
   var resultmili= (operando1*473.261)
   var resultmecubico = (operando1*0.00047)
   var resultdecubico = (operando1*0.47326)
   var resultcecubico= (operando1*473.261)
   var resultonza = (operando1*16.0009)
   var resultpiecubico= (operando1*0.01671)
   var resultlitro = (operando1*0.47326)
   var resultgalon= (operando1*0.12504)
   document.fcapacidad.resultado.value = " " + operando1 + " pintas es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultlitro.toFixed(2) + " litros.\n " + resultgalon.toFixed(2) + " galones.\n "
   }

   function galon() {
   var operando1 = document.fcapacidad.operando1.value
   var resulthecto = (operando1*0.03785)
   var resultmili= (operando1*3785.01)
   var resultmecubico = (operando1*0.00379)
   var resultdecubico = (operando1*3.78501)
   var resultcecubico= (operando1*3785.01)
   var resultonza = (operando1*127.971)
   var resultpiecubico= (operando1*0.13365)
   var resultpinta= (operando1*7.99773)
   var resultlitro = (operando1*3.78501)
   document.fcapacidad.resultado.value = " " + operando1 + " galones es igual a: \n " + resulthecto.toFixed(2) + " hectólitros.\n " + resultmili.toFixed(2) + " mililitros.\n " + resultmecubico.toFixed(2) + " m³.\n " + resultdecubico.toFixed(2) + " dm³.\n " + resultcecubico.toFixed(2) + " cm³.\n " + resultonza.toFixed(2) + " onzas líquidas.\n "  + resultpiecubico.toFixed(2) + " pie³.\n " + resultpinta.toFixed(2) + " pintas.\n " + resultlitro.toFixed(2) + " litros. "
   }

   <!-- VELOCIDAD___________________________________________________________________________________________- -->

   function kmh() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkms= (operando1*0.00028)
   var resultnudo = (operando1*0.54)
   var resultpseg = (operando1*0.9113)
   var resultmmin= (operando1*16.6667)
   var resultmseg = (operando1*0.27778	)
   var resultmph= (operando1*0.6214)
   document.fvelocidad.resultado.value = " " + operando1 + " Kilómetros por hora es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultnudo.toFixed(2) + " nudos.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmmin.toFixed(2) + " metros por minuto.\n " + resultmseg.toFixed(2) + " metros por segundo.\n " + resultmph.toFixed(2) + " millas por hora "
   }

   function kms() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*3600.00)
   var resultnudo = (operando1*1944.00)
   var resultpseg = (operando1*3280.68)
   var resultmmin= (operando1*60000.0)
   var resultmseg = (operando1*1000)
   var resultmph= (operando1*2237.04)
   document.fvelocidad.resultado.value = " " + operando1 + " Kilómetros por segundo es igual a: \n " + resultnudo.toFixed(2) + " nudos.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmmin.toFixed(2) + " metros por minuto.\n " + resultmseg.toFixed(2) + " metros por segundo.\n " + resultmph.toFixed(2) + " millas por hora "
   }

   function nudo() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*1.85185)
   var resultkms= (operando1*0.00051)
   var resultpseg = (operando1*1.68759)
   var resultmmin= (operando1*30.8642)
   var resultmseg = (operando1*0.51440	)
   var resultmph= (operando1*1.15074)
   document.fvelocidad.resultado.value = " " + operando1 + " nudos es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmmin.toFixed(2) + " metros por minuto.\n " + resultmseg.toFixed(2) + " metros por segundo.\n " + resultmph.toFixed(2) + " millas por hora "
   }

   function pseg() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*1.09733)
   var resultkms= (operando1*0.00030)
   var resultnudo = (operando1*0.59256)
   var resultmmin= (operando1*18.2889)
   var resultmseg = (operando1*0.30481	)
   var resultmph= (operando1*0.68188)
   document.fvelocidad.resultado.value = " " + operando1 + " Pies por segundo es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultnudo.toFixed(2) + " nudos.\n " + resultmmin.toFixed(2) + " metros por minuto.\n " + resultmseg.toFixed(2) + " metros por segundo.\n " + resultmph.toFixed(2) + " millas por hora "
   }

   function mmin() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*0.06)
   var resultkms= (operando1*0.00002)
   var resultnudo = (operando1*0.0324)
   var resultpseg = (operando1*0.05468)
   var resultmseg = (operando1*0.01667)
   var resultmph= (operando1*0.03728)
   document.fvelocidad.resultado.value = "  " + operando1 + " metros por minuto es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultnudo.toFixed(2) + " nudos.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmseg.toFixed(2) + " metros por segundo.\n " + resultmph.toFixed(2) + " millas por hora "
   }

   function mseg() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*3.60000)
   var resultkms= (operando1*0.001)
   var resultnudo = (operando1*1.94400)
   var resultpseg = (operando1*3.28068)
   var resultmmin= (operando1*60.0000)
   var resultmph= (operando1*2.23704)
   document.fvelocidad.resultado.value = "  " + operando1 + " metros por segundo es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultnudo.toFixed(2) + " nudos.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmmin.toFixed(2) + " metros por minuto.\n "  + resultmph.toFixed(2) + " millas por hora "
   }

   function mpho() {
   var operando1 = document.fvelocidad.operando1.value
   var resultkmh = (operando1*1.60927)
   var resultkms= (operando1*0.00045)
   var resultnudo = (operando1*0.86901)
   var resultpseg = (operando1*1.46653)
   var resultmmin= (operando1*26.8212)
   var resultmseg = (operando1*0.44702)
   document.fvelocidad.resultado.value = "  " + operando1 + " millas por hora es igual a: \n " + resultkms.toFixed(2) + " kilómetros por segundo.\n " + resultnudo.toFixed(2) + " nudos.\n " + resultpseg.toFixed(2) + " Pies por segundo.\n " + resultmmin.toFixed(2) + " metros por minuto.\n " + resultmseg.toFixed(2) + " metros por segundo.\n "
   }

   <!-- PRESIÓN________________________________________________________________________________________________________ -->

   function bar() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*3.60000)
   var resultkgcm= (operando1*1.01972)
   var resultpsi = (operando1*14.5004)
   var resultatm = (operando1*0.98688)
   var resulthpa = (operando1*1000.04)
   var resultpascal= (operando1*100004)
   document.fpres.resultado.value = "  " + operando1 + " bares de presión es igual a: \n " + resultkgcm.toFixed(2) + " kilogramos por cm².\n " + resultpsi.toFixed(2) + " libras fuerza por pulgada cuadrada.\n " + resultatm.toFixed(2) + " atmósferas.\n " + resulthpa.toFixed(2) + " HectoPascal.\n "  + resultpascal.toFixed(2) + " pascal. "
   }

   function kgcm() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*0.98067)
   var resultpsi = (operando1*14.22)
   var resultatm = (operando1*0.9678)
   var resulthpa = (operando1*980.7)
   var resultpascal= (operando1*98070)
   document.fpres.resultado.value = "  " + operando1 + " kilogramos por cm² es igual a: \n "  + resultpsi.toFixed(2) + " libras fuerza por pulgada cuadrada.\n " + resultatm.toFixed(2) + " atmósferas.\n " + resulthpa.toFixed(2) + " HectoPascal.\n "  + resultpascal.toFixed(2) + " pascal.\n"  + resultbar.toFixed(2) + " bares. "
   }

   function psi() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*0.06896)
   var resultkgcm= (operando1*0.07032)
   var resultatm = (operando1*0.06806)
   var resulthpa = (operando1*68.9662)
   var resultpascal= (operando1*6896.62)
   document.fpres.resultado.value = "  " + operando1 + " libras fuerza por pulgada cuadrada es igual a: \n " + resultkgcm.toFixed(2) + " kilogramos por cm².\n " + resultatm.toFixed(2) + " atmósferas.\n " + resulthpa.toFixed(2) + " HectoPascal.\n "  + resultpascal.toFixed(2) + " pascal.\n " + resultbar.toFixed(2) + " bares."
   }

   function atm() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*1.01329)
   var resultkgcm= (operando1*1.03327)
   var resultpsi = (operando1*14.6931)
   var resulthpa = (operando1*1013.33)
   var resultpascal= (operando1*101333)
   document.fpres.resultado.value = "  " + operando1 + " atmósferas es igual a: \n " + resultkgcm.toFixed(2) + " kilogramos por cm².\n " + resultpsi.toFixed(2) + " libras fuerza por pulgada cuadrada.\n " + resulthpa.toFixed(2) + " HectoPascal.\n "  + resultpascal.toFixed(2) + " pascal.\n " + resultbar.toFixed(2) + " bares."
   }

   function hpa() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*0.00100)
   var resultkgcm= (operando1*0.00102)
   var resultpsi = (operando1*0.01450)
   var resultatm = (operando1*0.00099)
   var resultpascal= (operando1*100.000)
   document.fpres.resultado.value = "  " + operando1 + " hectopascal es igual a: \n " + resultkgcm.toFixed(2) + " kilogramos por cm².\n " + resultpsi.toFixed(2) + " libras fuerza por pulgada cuadrada.\n " + resultatm.toFixed(2) + " atmósferas.\n " + resultpascal.toFixed(2) + " pascal.\n " + resultbar.toFixed(2) + " bares."
   }

   function pascal() {
   var operando1 = document.fpres.operando1.value
   var resultbar = (operando1*0.00001)
   var resultkgcm= (operando1*0.00001)
   var resultpsi = (operando1*0.00014)
   var resultatm = (operando1*0.00001)
   var resulthpa = (operando1*0.01)
   document.fpres.resultado.value = "  " + operando1 + " pascal es igual a: \n " + resultkgcm.toFixed(2) + " kilogramos por cm².\n " + resultpsi.toFixed(2) + " libras fuerza por pulgada cuadrada.\n " + resultatm.toFixed(2) + " atmósferas.\n " + resulthpa.toFixed(2) + " HectoPascal.\n "  + resultbar.toFixed(2) + " bares."
   }

   <!-- Romanos -->
   
  var counter = new Array(7);

		var romans = new Array(7);
		romans["I"] = 1;
		romans["V"] = 5;
		romans["X"] = 10;
		romans["L"] = 50;
		romans["C"] = 100;
		romans["D"] = 500;
		romans["M"] = 1000;
		
		var subs = new Array(4);
		subs["I"] = true;
		subs["X"] = true;
		subs["C"] = true;
		subs["M"] = true;	
		 		
		var getChar = new Array(7);
		getChar[0] = "I";
		getChar[1] = "V";
		getChar[2] = "X";
		getChar[3] = "L";
		getChar[4] = "C";
		getChar[5] = "D";
		getChar[6] = "M";
				
		 function createError(ErrorName, ErrorMessage) {
			 var theError = new Error();
			 theError.name = ErrorName;
			 theError.message = ErrorMessage;
			 throw theError;
		 }
				 	
		function checkRom(Rcur, Rnext, lSub, n, l) {
			if ((romans[Rcur] == undefined) || ((romans[Rnext] == undefined) && ((n + 1) < l))) {
				createError("InputError", "Not a Roman Numeral");
			}
			else if (romans[Rcur] >= lSub) {
				createError("InputError", "Not a Properly Formed Numeral");
			}
		}
		
		function testSub(cR, nR, pR) {
			if (romans[cR] < romans[nR]) {
				if ((romans[pR] == romans[nR]) && (subs[nR] != true)) {
					createError("InputError", "Not a Properly Formed Numeral");
				}
				else if ((subs[cR] == true) && (10*romans[cR] >= romans[nR])) {
					return true;
				}
				else {
					createError("InputError", "Not a Properly Formed Numeral");
				}
			}
			return false;
		}
		
		function testRom(rome) {
			if (counter[rome] < 3) {
				return true;
			}
			else {
				createError("InputError", "Not a Properly Formed Numeral");
			}
			return false;
		}
		
		function parseRomanToInt(rNumb, strict) {
			counter["I"] = 0;
			counter["V"] = 2;
			counter["X"] = 0;
			counter["L"] = 2;
			counter["C"] = 0;
			counter["D"] = 2;
			counter["M"] = Number.NEGATIVE_INFINITY;
			var intNumb = 0;
			var lastNumb = Number.POSITIVE_INFINITY;
			var thisNumb = 0;
			var lastSub = Number.POSITIVE_INFINITY;
			rNumb = rNumb.toString().toUpperCase()
			for (var i=0; i<rNumb.length; i++) {
				var currentR = rNumb.charAt(i);
				var nextR = rNumb.charAt(i + 1);
				var prevR = rNumb.charAt(i - 1);
				try {
					if (strict != false) {
						checkRom(currentR, nextR, lastSub, i, rNumb.length);
						if (testSub(currentR, nextR, prevR) == true) {
							thisNumb = (romans[nextR] - romans[currentR]);
							i++;
							lastSub = romans[currentR];
						}
						else if (testRom(currentR) == true){
							thisNumb = romans[currentR];
							counter[currentR]++;
						}
						if (thisNumb > lastNumb) {
							createError("InputError", "Not a Properly Formed Numeral");
						}
						else {
							intNumb += thisNumb;
							lastNumb = thisNumb;
						}
					}
					else {
						if ((romans[currentR] == undefined) || ((romans[nextR] == undefined) && ((i + 1) < rNumb.length))) {
							createError("InputError", "Not a Roman Numeral");
						}
						else if (romans[currentR] < romans[nextR]) {
							thisNumb = (romans[nextR] - romans[currentR]);
							i++;
						}
						else {
							thisNumb = romans[currentR];
						}
						intNumb += thisNumb;
					}
				}
		
				catch(e) {
					intNumb = e.name + ": " + e.message;
					break;
				}
			}
			return intNumb;
		}
				 		
		function ints(pos, iValue) {
			var charValue = "";
			var s = 2*pos;
			if (pos > 2) {
				for (var i=0; i<iValue*Math.pow(10,(pos-3)); i++) {
					charValue += "M";
				}
			}
			else if (iValue < 4) {
				for (var i=0; i<iValue; i++) {
					charValue += getChar[s];
				}
			}
			else if (iValue == 4) {
				charValue = getChar[s] + getChar[s+1];
			}
			else if (iValue < 9) {
				charValue = getChar[s+1];
				for (var i=0; i<iValue-5; i++) {
					charValue += getChar[s];
				}
			}
			else if (iValue == 9) {
				charValue = getChar[s] + getChar[s+2];
			}
			return new String(charValue);
		}
		
		function parseIntToRoman(intNumb, whichError) {
			var romNumb;
			var romNumbFinal = "";
			if ((parseInt(intNumb, 10) != intNumb) || (parseInt(intNumb,10) < 0)) {
				try {		
					if (whichError == 0) {
						createError("InputError", "Cannot create a valid Roman Numeral");
					}
					else {
						createError("InputError", "Not a positive Integer");
					}
				}
				catch(err) {
					romNumbFinal = err.name.toString() + ": " + err.message.toString();
				}
			}
			else {
				intNumb = parseInt(intNumb, 10).toString();
				for (var k=0; k<intNumb.length; k++) {
					var currentI = parseInt(intNumb.charAt(intNumb.length - (k + 1)));
					romNumb = romNumbFinal;
					romNumbFinal = ints(k, currentI) + romNumb;
				}
			}
			return romNumbFinal;
		}
		
		function convertRoman() {
			var rominput = document.getElementById("roman").value;
			document.getElementById("number").value = parseRomanToInt(rominput, true);
		}
		function convertToRoman() {
			var intput = document.getElementById("number").value;
			document.getElementById("roman").value = parseIntToRoman(intput, 1);
		}
		//The next function should fix common mistakes, and at least put out a valid numeral
		function correctRoman() {
			var wrongput = document.getElementById("roman2").value;
			document.getElementById("roman").value = parseIntToRoman(parseRomanToInt(wrongput, false), 0);
		}
