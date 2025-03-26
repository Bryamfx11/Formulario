import { modalAlerta } from './paint.js';
import { validarFormulario } from './validate.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM completamente cargado");

    const mensajeFinalElement = document.querySelector("#mensajeFinal");
    if (mensajeFinalElement) {
        mensajeFinalElement.textContent = mensaje || "No proporcionado";
    } else {
        console.warn("⚠️ Elemento con id 'mensajeFinal' no encontrado.");
    }

    const form = document.querySelector("#fm_contact");
    if (!form) {
        console.error("❌ ERROR: No se encontró el formulario con id 'fm_contact'");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.querySelector("#name")?.value.trim();
        const apellido = document.querySelector("#last-name")?.value.trim();
        const correo = document.querySelector("#mail")?.value.trim();
        const telefono = document.querySelector("#telphone")?.value.trim();
        const mensaje = document.querySelector("#mensaje")?.value.trim();

        const validacion = validarFormulario(nombre, correo, telefono, mensaje);
        if (validacion !== "OK") {
            alert(`⚠️ ${validacion}`);
            return;
        }

        // Llamar al modal y, si se confirma, agregar los datos al formulario
        modalAlerta(
            `¿Está seguro(a) de enviar la petición?`, 
            "aceptar", 
            { nombre, apellido, correo, telefono, mensaje },
            () => agregarLabel(nombre, apellido, correo, telefono, mensaje) // Llamar a la función de agregar el label
        );
    });

    document.getElementById("btn-enviar").addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Capturar los valores de los campos del formulario
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("mail").value;
        const phone = document.getElementById("telphone").value;
        const message = document.getElementById("mensaje").value;

        // Validar que los campos no estén vacíos
        if (!name || !lastName || !email || !phone || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear el contenido del cuadro con los datos ingresados
        const mensajeFinal = document.getElementById("mensajeFinal");
        mensajeFinal.innerHTML = `
            <div class="datos-pdr">
                <h3>Datos del PQR</h3>
                <p><strong>Nombre y Apellidos:</strong> ${name} ${lastName}</p>
                <p><strong>Correo Electrónico:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            </div>
        `;

        // Opcional: Limpiar los campos del formulario
        document.getElementById("fm_contact").reset();
    });
});

// 📌 Función para agregar el label con los datos ingresados
function agregarLabel(nombre, apellido, correo, telefono, mensaje) {
    const mensajeFinal = document.querySelector("#mensajeFinal");

    // Limpiar contenido previo
    mensajeFinal.innerHTML = "";

    // Crear un contenedor para los datos
    const contenedor = document.createElement("div");
    contenedor.classList.add("datos-pdr");

    // Agregar el contenido HTML con los datos ingresados
    contenedor.innerHTML = `
        <h3>Datos del PQR</h3>
        <p><strong>Nombre y Apellidos:</strong> ${nombre} ${apellido}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje || "No proporcionado"}</p>
    `;

    // Agregar el contenedor al elemento mensajeFinal
    mensajeFinal.appendChild(contenedor);
}




