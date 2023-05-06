const formulario = document.querySelector('form');
const confirmacion = document.querySelector('#confirmacion');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formulario.checkValidity()) {
        const formData = new FormData(formulario);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        enviarTurno(data);
    } else {
        formulario.reportValidity();
    }
});

function enviarTurno(data) {
    // Agregar código para enviar la reserva al correo electrónico
    const mensaje = `Estimado/a ${data.nombre}, su turno ha sido confirmado para el día ${data.fecha} a las ${data.hora}. Por favor, estar puntual a la hora acordada. ¡Gracias!`;

    // Agregar código para enviar el correo electrónico de confirmación de reserva
    const email = data.email;
    const asunto = `Confirmación de turno para Estudio de Abogados`;
    const cuerpo = mensaje;
    const correoElectronico = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
const emailDestino = "malbihi@gmail.com";
const asunto = `Confirmación de turno para Estudio de Abogados`;
const cuerpo = mensaje;
const correoElectronico = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
window.location.href = correoElectronico;

    // Redireccionar al usuario a la página de pago
    const urlPago = `https://link.mercadopago.com.ar/abogadamalvinaramayo`;
    window.location.href = urlPago;

    // Mostrar el mensaje de confirmación
    confirmacion.classList.remove('oculto');
}
