const saludar = (persona, hora) => {
    if (persona) {
        console.log(`¡Buen día, ${persona}! Son las ${hora}`);
    } else {
        console.log("Hola, pero no se quien sos");
    }
}

const countDooku = (aparece) => {
    if (aparece) {
        console.log("¡Voy por tí Dooku!");
    } else {
        console.log("Hoy estor tranquilo");
    }
}

let hoy = new Date();
let aparece = true;

saludar("Anakin", hoy.toTimeString());
countDooku(aparece)