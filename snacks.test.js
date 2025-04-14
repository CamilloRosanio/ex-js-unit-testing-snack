// Quando eseguo il REFACTURING, cioè aggiorno il mio codice, posso salvare le mie funzioni su files a parte invece che qui nel mio foglio di test. Dopo il TEST le importo per lasciarle nei miei test che devono continuare a funzionare durante i vari REFACTURING.
// Ricordiamo che lo scopo è provare vari casi possibili, ecco perchè per esempio nel primo test passo stringhe differenti, maiuscole e minuscole, doppio spazio tra nome e cognome, e così via..



// IMPORT FUNZIONI (REFACTURING)
const { getInitials } = require('./snacks.js');



// TESTS

test('La funzione getInitials restituisce le iniziali di un nome copleto.', () => {
    expect(getInitials('Mario Rossi')).toBe('M.R.');
    expect(getInitials('luigi bianchi')).toBe('L.B.');
    expect(getInitials('doppio  spazio')).toBe('D.S.');
});