// Lo scopo dei TESTS è provare vari casi possibili, ecco perchè per esempio nel primo test passo stringhe differenti, maiuscole e minuscole, doppio spazio tra nome e cognome, e così via..
// Quando eseguo il REFACTURING, cioè aggiorno il mio codice, posso salvare le mie funzioni su files a parte invece che qui nel mio foglio di test. Dopo il TEST le importo per renderle disponibili per i miei test che devono (SEMPRE) continuare a funzionare durante i vari REFACTURING.



// IMPORT FUNZIONI (REFACTURING)
const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostByid,
    addPost,
    removePost,
} = require('./snacks.js');


// DATA

// Siccome uso questa base di dati in più TEST, e i test devo SEMPRE essere ripetibili e svincolati tra loro, uso BEFORE-EACH e AFTER-EACH, due funzioni che mi permettono di "resettare" in questo caso il valore della mia variabile "posts", così da partire sempre dallo stesso valore ad ogn esperimento e test, senza dover tener conto delle modifiche che i miei dati subiscono durante i TEST.

let posts;

beforeEach(() => {
    posts = [
        { id: 1, title: "Introduzione a JavaScript", slug: 'introduzione-a-javascript' },
        { id: 2, title: "React Hooks", slug: 'react-hooks' },
    ]
})

afterEach(() => {
    posts = [];
})



// TESTS

// Il DESCRIBE serve a raggruppare insieme i TEST per "categorie" o concetti comuni. Ad esempio subito sotto trovo tutti i TEST che manipolano delle STRINGS.

// DESCRIBE - STRINGS
describe('Manipolazione di Stringhe', () => {

    // Snack 1
    test('La funzione getInitials restituisce le iniziali di un nome copleto.', () => {
        expect(getInitials('Mario Rossi')).toBe('M.R.');
        expect(getInitials('luigi bianchi')).toBe('L.B.');
        expect(getInitials('doppio  spazio')).toBe('D.S.');
    });

    // Snack 5
    test('La funzione isPalindrome verifica se una stringa è palindroma.', () => {
        expect(isPalindrome('anna ')).toBeTruthy();
        expect(isPalindrome('boolean')).toBeFalsy();
    });
})


// DESCRIBE - ARRAYS
describe('Operazioni su Array', () => {

    // Snack 3
    test('La funzione "average" calcola la media aritmetica di un array di numeri.', () => {
        expect(average([5, 15])).toBe(10);
        expect(average([10, 20, 30, 40, 50])).toBe(30);
        // Siccome devo gestire un THROW e non un risultato con RETURN, in questo caso devo passare una CALLBACK FUNCTION all'EXPECT, e non più la sola funzione.
        expect(() => average([5, 'ciao'])).toThrow();
    });

    // Snack 7
    test('La funzione findPostByid restituisce il post corretto dato l\'array di post e l\'id.', () => {
        expect(findPostByid(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: 'react-hooks' });
        expect(findPostByid(posts, 3)).toBe(null);
        expect(() => findPostByid(posts, 'ciao')).toThrow('"ciao" non è un id');
        expect(() => findPostByid([34, 67], 2)).toThrow('L\'array posts non è nel formato corretto');
    })

    // Snack 8 - BONUS
    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più.', () => {
        addPost(posts, { id: 3, title: "Introduzione a Typescript", slug: 'introduzione-a-typescript' })
        expect(posts).toHaveLength(3);
    })

    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno.', () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(1);
    })

    // Snack 9 - BONUS
    test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.', () => {
        expect(() => addPost(posts, { id: 2, title: "Post di test", slug: 'post-di-test' })).
            toThrow('Id già esistente');

        expect(() => addPost(posts, { id: 3, title: "React Hooks", slug: 'react-hooks' })).
            toThrow('Slug già esistente');
    })

})


// DESCRIBE - SLUG
describe('Generazione di Slug', () => {

    // Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug('Titolo MOLTO bello')).toBe('titolo-molto-bello');
    });

    // Snack 4
    test('La funzione createSlug sostituisce gli spazi con "-".', () => {
        expect(createSlug('Titolo molto bello')).toBe('titolo-molto-bello');
    });

    // Snack 6
    test('La funzione createSlug lancia un errore se la stringa è vuota o non valida.', () => {
        // All'interno del "toTrow" posso passare una stringa contenente il messaggio di errore.
        expect(() => createSlug('')).toThrow('Stringa non valida');
        expect(() => createSlug(null)).toThrow('Stringa non valida');
    })
})


