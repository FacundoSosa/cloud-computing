let distancia = 0;
let velocidad = 9;


while (distancia < 10) {
    for (distancia = 3; distancia <= 10; distancia *= 3) {
        if (velocidad < 9) {
            console.log("Aumenta tu velocidad para obtener un caramelo");
        } else {
            console.log("Llegaste al km " + distancia + " toma un caramelo");
        } 
    }; 

    distancia++; 
};

   

    





