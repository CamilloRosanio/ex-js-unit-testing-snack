// Lo scopo dei TESTS è provare vari casi possibili, ecco perchè per esempio nel primo test passo stringhe differenti, maiuscole e minuscole, doppio spazio tra nome e cognome, e così via..
// Quando eseguo il REFACTURING, cioè aggiorno il mio codice, posso salvare le mie funzioni su files a parte invece che qui nel mio foglio di test. Dopo il TEST le importo per renderle disponibili per i miei test che devono (SEMPRE) continuare a funzionare durante i vari REFACTURING.



// IMPORT FUNZIONI (REFACTURING)
const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
} = require('./snacks.js');



// TESTS

// Snack 1
test('La funzione getInitials restituisce le iniziali di un nome copleto.', () => {
    expect(getInitials('Mario Rossi')).toBe('M.R.');
    expect(getInitials('luigi bianchi')).toBe('L.B.');
    expect(getInitials('doppio  spazio')).toBe('D.S.');
});

// Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Titolo MOLTO bello')).toBe('titolo-molto-bello');
});


// Snack 3
test('La funzione "average" calcola la media aritmetica di un array di numeri.', () => {
    expect(average([5, 15])).toBe(10);
    expect(average([10, 20, 30, 40, 50])).toBe(30);
    // Siccome devo gestire un THROW e non un risultato con RETURN, in questo caso devo passare una CALLBACK FUNCTION all'EXPECT, e non più la sola funzione.
    expect(() => average([5, 'ciao'])).toThrow();
});

// Snack 4
test('La funzione createSlug sostituisce gli spazi con "-".', () => {
    expect(createSlug('Titolo molto bello')).toBe('titolo-molto-bello');
});

// Snack 5
test('La funzione isPalindrome verifica se una stringa è palindroma', () => {
    expect(isPalindrome('anna ')).toBeTruthy();
    expect(isPalindrome('boolean')).toBeFalsy();
});

// Snack 6
test('La funzione createSlug lancia un errore se la stringa è vuota o non valida', () => {
    // All'interno del "toTrow" posso passare una stringa contenente il messaggio di errore.
    expect(() => createSlug('')).toThrow('Stringa non valida');
    expect(() => createSlug(null)).toThrow('Stringa non valida');
})