let animales_aereos = ["Agila", "Paloma", "Loro", "Colibri"];
let animales_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animales_acuaticos = ["Pez", "Trucha", "Salmon", "Delfin"];


cliclo_aereos:
for(let aereos of animales_aereos){
    cliclo_terrestres:
    for(let terrestres of animales_terrestres){
            cliclo_acuaticos:
            for(let acuaticos of animales_acuaticos){
                console.count();
                //break cliclo_acuaticos;
                console.log(`Animales Acuáticos: ${acuaticos}`);
            }
        break cliclo_terrestres;
        console.log(`Animales Terrestres: ${terrestres}`);
    }
    break cliclo_aereos;
    console.log(`Animales Aéreos: ${aereos}`);
}