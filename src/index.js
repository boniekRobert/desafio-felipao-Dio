let nome = "Sub-Zero";
let xp = 4999;
let xpResultado;

if (xp < 1000) {
    xpResultado = "Ferro";
} 
else if (xp <= 2000) {
    xpResultado = "Bronze";
}
else if (xp <= 5000) {
    xpResultado = "Prata";
}
else if (xp <= 7000) {
    xpResultado = "Ouro";
}
else if (xp <= 8000) {
    xpResultado = "Platina";
}
else if (xp <= 9000) {
    xpResultado = "Ascendente";
}
else if (xp <= 10000) {
    xpResultado = "Imortal";
}
else {
    xpResultado = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + xpResultado);
