function funcReserva(){

	var fecha_ini = document.getElementById("fecha_ini_reserva").value;
	var fecha_fin = document.getElementById("fecha_fin_reserva").value;
	var habitaciones = document.getElementById("opcion_reserva").value;

	if(isValidDate(fecha_ini) == true){
		if(isValidDate(fecha_fin) == true && fecha_ini < fecha_fin){
			alert("Ha elegido la opcion de " + habitaciones +
				" para la fecha de inicio: " + fecha_ini +
				" y fecha fin: " + fecha_fin 
				);
		}else {
			alert("Fecha fin incorrecta.");
		}

	} else {
		alert("Fecha inicio incorrecta.");
	}

}

function funcLiving(){

	var fecha = document.getElementById("fecha").value;
	var dias = document.getElementById("dias").value;
	var asistentes = document.getElementById("asistentes").value;
	var codigo = document.getElementById("codigo").value;

	if(codigo != ""){
		if(isValidDate(fecha) == true){
			if(asistentes>0 && asistentes<20) {
				if(dias != ""){
					alert("Para la fecha: " + fecha +
						" y durante " + dias + " dias "+
						" ha reservado el salon para " +
						asistentes + " asistentes."
					);
				} else {
					alert("Hay que elegir el numero de dias.")
				}

			} else {
				alert("Hay que elegir el numero de asistentes.");
			}
		} else {
			alert("Fecha introducida invalida.");
		}
	} else {
		alert("Tiene que introducir su código de reserva.");
	}
}


function funcCultura(){

	var opcion = document.getElementById("opcion").value;
	var fecha = document.getElementById("fecha").value;
	var visitantes = document.getElementById("visitantes").value;
	var codigo = document.getElementById("codigo").value;

	if(codigo != ""){
		if(isValidDate(fecha) == true){
			if(visitantes>0 && visitantes<100) {
				alert("Ha elegido la opción de " + opcion +
				" para la fecha: " + fecha +
				" y " + visitantes + " visitantes."
				);
			} else {
				alert("Hay que elegir el numero de visitantes.");
			}
		} else {
			alert("Fecha introducida invalida.");
		}
	} else {
		alert("Tiene que introducir su código de reserva.");
	}	
}

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString)
{
    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    console.log("Dia: " + day + " month: " + month + " year: " + year);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};