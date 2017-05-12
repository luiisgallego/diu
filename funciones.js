/**
 *Valorar el hotel
 */
function valorar() {
    console.log("valorar");
    var text = document.getElementById("textarea_opinion").value;
    console.log(text);
    var code = document.getElementById("code_opinion").value;
    console.log(code);
    var select_opinion = document.getElementById("select_opinion");
    var selectedelement = select_opinion.options[select_opinion.selectedIndex].id;
    console.log(selectedelement);

    if ("" == code) {
        showErrorMessagesPage("código de reserva no valido", false);
        return;
    } else if ("" == text || "Enter text here..." == text) {
        showErrorMessagesPage("valoración no es valida", false);
        return;
    }

    var father = document.getElementById("list_opinions");

    var div1 = document.createElement("div");
    div1.className = "opinion_total_element";
    father.append(div1);

    var div2 = document.createElement("div");
    div2.className = "container";
    div1.append(div2);

    var div3 = document.createElement("div");
    div3.className = "row";
    div2.append(div3);

    var div4 = document.createElement("div");
    div4.className = "col-md-12";
    div3.append(div4);

    var div5 = document.createElement("div");
    div5.className = "section";
    div4.append(div5);

    var div6 = document.createElement("div");
    div6.className = "container";
    div5.append(div6);

    var div7 = document.createElement("div");
    div7.className = "row";
    div6.append(div7);

    if (selectedelement == "thumbs_up_opinion") {
        var div8 = document.createElement("div");
        div8.className = "col-md-1";

        var i = document.createElement("i");
        i.className = "fa fa-3x fa-fw fa-thumbs-o-up";
        div8.append(i);

        var div9 = document.createElement("div");
        div9.className = "opinion_element col-md-11";
        div9.append(document.createTextNode(text));

    } else {
        var div9 = document.createElement("div");
        div9.className = "col-md-1";

        var i = document.createElement("i");
        i.className = "fa fa-3x fa-fw fa-thumbs-o-down";
        div9.append(i);

        var div8 = document.createElement("div");
        div8.className = "opinion_element col-md-11";
        div8.append(document.createTextNode(text));
    }
    div7.append(div8);
    div7.append(div9);
}

/**
 * Check if the e-mail is valid
 * @param {String} email
 * @returns {boolean} if the e-mail is valid
 */
function validate_email(email) {
    if (typeof(email) === 'string') {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return true;
        }
    } else {
        return false;
    }
}

/**
 *Enviar un mensaje de contacto
 */
function contact() {
    console.log("contact");
    var email = document.getElementById("inputEmail").value;
    console.log(email);
    var name = document.getElementById("inputNombre").value;
    console.log(name);

    var comment = document.getElementById("comment").value;
    console.log(comment);

    if ("" == email || !validate_email(email)) {
        showErrorMessagesPage("email no valido", false);
        return;
    } else if ("" == name) {
        showErrorMessagesPage("nombre no es valida", false);
        return;
    } else if ("" == comment) {
        showErrorMessagesPage("mensaje no es valida", false);
        return;
    }
    showErrorMessagesPage("Mensaje creado correctamente por " + name + " con email " + email, true);
}

/**
 * Realiza una reserva
 */
function funcReserva() {
    var fecha_ini = document.getElementById("fecha_ini_reserva").value;
    var fecha_fin = document.getElementById("fecha_fin_reserva").value;
    var habitaciones = document.getElementById("opcion_reserva").value;

    if (isValidDate(fecha_ini) == true) {
        if (isValidDate(fecha_fin) == true && fecha_ini < fecha_fin) {
            showErrorMessagesPage("Ha elegido la opcion de " + habitaciones +
                " para la fecha de inicio: " + fecha_ini +
                " y fecha fin: " + fecha_fin, false);
        } else {
            showErrorMessagesPage("Fecha fin incorrecta.", false);
        }

    } else {
        showErrorMessagesPage("Fecha inicio incorrecta.", false);
    }

}


/**
 *Reserva una un salon
 */
function funcLiving() {
    var fecha = document.getElementById("fecha").value;
    var dias = document.getElementById("dias").value;
    var asistentes = document.getElementById("asistentes").value;
    var codigo = document.getElementById("codigo").value;

    if (codigo != "") {
        if (isValidDate(fecha) == true) {
            if (asistentes > 0 && asistentes < 20) {
                if (dias != "") {
                    showErrorMessagesPage("Para la fecha: " + fecha +
                        " y durante " + dias + " dias " +
                        " ha reservado el salon para " +
                        asistentes + " asistentes.", true
                    );
                } else {
                    showErrorMessagesPage("Hay que elegir el numero de dias.", false)
                }

            } else {
                showErrorMessagesPage("Hay que elegir el numero de asistentes.", false)
            }
        } else {
            showErrorMessagesPage("Fecha introducida invalida.", false)
        }
    } else {
        showErrorMessagesPage("Tiene que introducir su código de reserva.", false)
    }
}

/**
 *Reserva una actividad cultural
 */
function funcCultura() {
    var opcion = document.getElementById("opcion").value;
    var fecha = document.getElementById("fecha").value;
    var visitantes = document.getElementById("visitantes").value;
    var codigo = document.getElementById("codigo").value;

    if (codigo != "") {
        if (isValidDate(fecha) == true) {
            if (visitantes > 0 && visitantes < 100) {
                showErrorMessagesPage("Ha elegido la opción de " + opcion +
                    " para la fecha: " + fecha +
                    " y " + visitantes + " visitantes.", true
                );
            } else {
                showErrorMessagesPage("Hay que elegir el numero de visitantes.", false)
            }
        } else {
            showErrorMessagesPage("Fecha introducida invalida.", false)
        }
    } else {
        showErrorMessagesPage("Tiene que introducir su código de reserva.", false)
    }
}

/**
 * Validates that the input string is a valid date formatted as "mm/dd/yyyy"
 * @param {string} dateString
 * @returns {boolean} bool
 */
function isValidDate(dateString) {
    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    console.log("Dia: " + day + " month: " + month + " year: " + year);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};


/**
 * show the error in a div
 * @param {string} the element of the error, such as: login, message, etc
 * @param {message} message of error
 * @returns {boolean} bool
 */
function showErrorMessagesPage(message, success) {
    if (typeof(message) === 'string') {
        element_error_message = document.getElementById("showErrorMessage")
        element_error_message.style.display = "block";
        if (success) {
            element_error_message.className = "error_footer showErrorMessagesPage showErrorMessagesPage-success";
            element_error_message.style.backgroundColor = "rgb(164, 229, 165)";
        } else {
            element_error_message.className = "error_footer showErrorMessagesPage showErrorMessagesPage-danger";
            element_error_message.style.backgroundColor = "rgb(229, 164, 164)";
        }
        document.getElementById("errorMessage").innerHTML = message;

        fade(element_error_message, 300);
        return true;
    } else {
        console.log("Incorrect input showErrorMessage.");
        return false;
    }
}


/**
 * Disappear the element with a speed
 * @param {element} html element
 * @param {speed} speed to disappear
 */
function fade(element, speed) {
    var op = 1,
        timer = setInterval(function() {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, speed);
}
