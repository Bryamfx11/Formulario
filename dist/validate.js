function validarFormulario(nombre, correo, telefono, mensaje) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nombre.trim()) {
        return "El nombre es obligatorio.";
    }
    if (!emailRegex.test(correo)) {
        return "Correo electrónico inválido.";
    }
    if (!phoneRegex.test(telefono)) {
        return "El teléfono debe tener 10 dígitos numéricos.";
    }
    if (!mensaje || mensaje.trim().length === 0) {
        return "El mensaje no puede estar vacío.";
    }
    return "OK";
}

// Exportamos la función correctamente
export { validarFormulario };
