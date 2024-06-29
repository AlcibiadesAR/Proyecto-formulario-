submitFunction = (event) => {
  event.preventDefault();
  if (!validarFormulario()) {
    event.preventDefault();
  } else {
    event.preventDefault();

    alert(
      "Los Datos enviados fueron: " +
        "\n" +
        "nombre: " +
        document.getElementById("nombre").value +
        "\n" +
        "Apellido: " +
        document.getElementById("apellido").value +
        "\n" +
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Edad: " +
        document.getElementById("edad").value +
        "\n" +
        "Actividad: " +
        document.getElementById("actividad").value +
        "\n" +
        "Nivel de estudio: " +
        document.getElementById("nivelEstudio").value +
        "\n"
    );
  }
};

document
  .getElementById("formulario")
  .addEventListener("submit", submitFunction);

const validarFormulario = () => {
  let campoTexto = document.querySelectorAll('input[type="text"]');
  let validacion = true;

  campoTexto.forEach((campo) => {
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    );
    if (campo.value.length == "") {
      mostrarError(errorCampo, "¡Este campo es requerido!");
      validacion = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      mostrarError(errorCampo, "¡Este campo debe tener al menos 3 caracteres!");
      validacion = false;
    } else {
      ocultarError(errorCampo);
    }
  });

  const campoEmail = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail.value)) {
    ocultarError(errorEmail);
  } else {
    mostrarError(errorEmail, "¡Ingrese un correo electrónico válido!");
  }

  const campoEdad = document.getElementById("edad");
  let errorEdad = document.getElementById("errorEdad");

  if (campoEdad.value < 18) {
    mostrarError(errorEdad, "¡Debes ser mayor de edad para registrarte!");
    validacion = false;
  } else {
    ocultarError(errorEdad);
  }

  const actividad = document.getElementById("actividad");
  const errorActividad = document.getElementById("errorActividad");

  if (actividad.value == "") {
    mostrarError(errorActividad, "¡Por favor, selecciona una actividad!");
    validacion = false;
  } else {
    ocultarError(errorActividad);
  }

  const nivelEstudio = document.getElementById("nivelEstudio");
  const errorNivelEstudio = document.getElementById("errorNivelEstudio");

  if (nivelEstudio.value == "") {
    mostrarError(
      errorNivelEstudio,
      "¡Por favor, selecciona un nivel de estudio!"
    );
    validacion = false;
  } else {
    ocultarError(errorNivelEstudio);
  }

  const aceptoTerminos = document.getElementById("aceptoTerminos");
  const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

  if (!aceptoTerminos.checked) {
    mostrarError(
      errorAceptoTerminos,
      "Debes aceptar los términos y condiciones"
    );
    validacion = false;
  } else {
    ocultarError(errorAceptoTerminos);
  }

  return validacion;
};

const mostrarError = (elemento, mensaje) => {
  elemento.textContent = mensaje;
  elemento.style.display = "block";
};

const ocultarError = (elemento) => {
  elemento.textContent = "";
  elemento.style.display = "none";
};
d;
