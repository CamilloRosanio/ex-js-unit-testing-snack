
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ').filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
    return str.toLowerCase().replaceAll(' ', '-');
}

function average(numeri) {
    numeri.forEach(n => {
        if (isNaN(n)) {
            throw new Error('Average vuole solo numeri!')
        }
    });

    // Versione FOR EACH
    // let somma = 0;
    // numeri.forEach(n => {
    //     somma += n;
    // });
    // return somma / numeri.length;

    // Versione REDUCE
    return numeri.reduce((acc, n) => acc + n, 0) / numeri.length;
}

function isPalindrome(parola) {

    // Versione con UNSHIFT
    // const caratteriInversi = [];
    // const parolaSenzaSpazi = parola.trim();
    // for (let i = 0; i < parolaSenzaSpazi.length; i++) {
    //     const carattere = parolaSenzaSpazi[i];
    //     caratteriInversi.unshift(carattere);
    // }
    // return parolaSenzaSpazi === caratteriInversi.join('');

    const parolaInversa = parola.trim().split('').reverse().join('');
    return parola.trim() === parolaInversa;

}



module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
}