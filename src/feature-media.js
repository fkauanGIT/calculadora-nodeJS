function media(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("Forneça um array com pelo menos um número.");
    }
    const soma = numeros.reduce((total, num) => total + num, 0);
    return soma / numeros.length;
}
module.exports = media;