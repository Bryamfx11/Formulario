document.addEventListener("DOMContentLoaded", () => {
    let fontSize = 16; // Tamaño de fuente base

    // Selección de botones
    const btnAumentarFuente = document.getElementById("addFont");
    const btnDisminuirFuente = document.getElementById("susFont");
    const btnContraste = document.getElementById("contrast");

    // Botón para aumentar el tamaño de fuente
    btnAumentarFuente.addEventListener("click", () => {
        fontSize += 2; // Incrementa el tamaño de fuente
        document.body.style.fontSize = fontSize + "px"; // Aplica el tamaño a todo el cuerpo
        console.log(`🔼 Tamaño de fuente aumentado a ${fontSize}px`);
    });

    // Botón para disminuir el tamaño de fuente
    btnDisminuirFuente.addEventListener("click", () => {
        if (fontSize > 10) { // Evita que el tamaño sea demasiado pequeño
            fontSize -= 2; // Reduce el tamaño de fuente
            document.body.style.fontSize = fontSize + "px"; // Aplica el tamaño a todo el cuerpo
            console.log(`🔽 Tamaño de fuente reducido a ${fontSize}px`);
        } else {
            console.warn("⚠️ El tamaño de fuente no puede ser menor a 10px.");
        }
    });

    // Evento para cambiar contraste
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("modo-contraste");
        console.log("🌙 Modo de alto contraste activado/desactivado");
    });
});
