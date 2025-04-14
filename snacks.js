
function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ').filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
    if (!str) {
        throw new Error('Stringa non valida')
    }
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

function findPostByid(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`)
    }
    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error('L\'array posts non è nel formato corretto')
        }
    })
    return posts.find(p => p.id === id) || null;
}

function addPost(posts, post) {
    const ids = posts.map(p => p.id);
    const slugs = posts.map(p => p.slug);

    if (ids.includes(post.id)) {
        throw new Error('Id già esistente');
    }
    if (slugs.includes(post.slug)) {
        throw new Error('Slug già esistente');
    }

    posts.push(post);
}

function removePost(posts, id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
}



module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostByid,
    addPost,
    removePost,
}