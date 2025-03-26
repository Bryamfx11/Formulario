const cardEstudiantes = document.querySelector('#card');

const agregarEstudiantes = (name, lastName, mail, telefono, msn) => {
    let persona = {
        nombre: name,
        apellido: lastName,
        correo: mail,
        telefono: telefono,
        mensaje: msn,
    };
    let text = `¿Está seguro(a) ${persona.nombre} de enviar la petición?`;
    modalAlerta(text, "aceptar", persona);
};

function modalAlerta(cadena, tipo, persona) {
    const alerta = document.createElement("div");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");

    const texto = document.createElement("p");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>`;

    const btnCerrar = document.createElement("button");
    btnCerrar.innerText = "Cerrar";
    btnCerrar.addEventListener("click", () => {
        alerta.remove();
    });

    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);
    document.body.appendChild(alerta);
}

// Exportamos la función correctamente
export { modalAlerta, agregarEstudiantes };
