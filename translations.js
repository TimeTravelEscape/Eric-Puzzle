// Translation file for UI elements
const translations = {
    en: {
        gameTitle: "Puzzle Quest",
        timeRemaining: "Time Remaining",
        timeElapsed: "Time Elapsed",
        startButton: "Start Game",
        finalPuzzle: "Final Puzzle",
        enterPassword: "Enter Password",
        cancel: "Cancel",
        submit: "Submit",
        congratulations: "Congratulations!",
        yourTime: "Your Time",
        completedIn: "Completed in",
        hint: "Hint",
        puzzle: "Puzzle",
        timeOut: "Time's Up!",
        tryAgain: "Try Again",
        startGameFirst: "Please start the game first!"
    },
    pl: {
        gameTitle: "Misja Zagadek",
        timeRemaining: "Pozostały Czas",
        timeElapsed: "Czas Gry",
        startButton: "Rozpocznij Grę",
        finalPuzzle: "Finałowa Zagadka",
        enterPassword: "Wprowadź Hasło",
        cancel: "Anuluj",
        submit: "Zatwierdź",
        congratulations: "Gratulacje!",
        yourTime: "Twój Czas",
        completedIn: "Ukończono w",
        hint: "Podpowiedź",
        puzzle: "Zagadka",
        timeOut: "Koniec Czasu!",
        tryAgain: "Spróbuj Ponownie",
        startGameFirst: "Najpierw rozpocznij grę!"
    },
    de: {
        gameTitle: "Rätsel Quest",
        timeRemaining: "Verbleibende Zeit",
        timeElapsed: "Verstrichene Zeit",
        startButton: "Spiel Starten",
        finalPuzzle: "Finales Rätsel",
        enterPassword: "Passwort Eingeben",
        cancel: "Abbrechen",
        submit: "Bestätigen",
        congratulations: "Glückwunsch!",
        yourTime: "Deine Zeit",
        completedIn: "Abgeschlossen in",
        hint: "Hinweis",
        puzzle: "Rätsel",
        timeOut: "Zeit Abgelaufen!",
        tryAgain: "Nochmal Versuchen",
        startGameFirst: "Bitte starte zuerst das Spiel!"
    },
    fr: {
        gameTitle: "Quête d'Énigmes",
        timeRemaining: "Temps Restant",
        timeElapsed: "Temps Écoulé",
        startButton: "Commencer le Jeu",
        finalPuzzle: "Énigme Finale",
        enterPassword: "Entrer le Mot de Passe",
        cancel: "Annuler",
        submit: "Soumettre",
        congratulations: "Félicitations!",
        yourTime: "Votre Temps",
        completedIn: "Terminé en",
        hint: "Indice",
        puzzle: "Énigme",
        timeOut: "Temps Écoulé!",
        tryAgain: "Réessayer",
        startGameFirst: "Veuillez d'abord commencer le jeu!"
    },
    es: {
        gameTitle: "Búsqueda de Acertijos",
        timeRemaining: "Tiempo Restante",
        timeElapsed: "Tiempo Transcurrido",
        startButton: "Iniciar Juego",
        finalPuzzle: "Acertijo Final",
        enterPassword: "Ingrese la Contraseña",
        cancel: "Cancelar",
        submit: "Enviar",
        congratulations: "¡Felicitaciones!",
        yourTime: "Tu Tiempo",
        completedIn: "Completado en",
        hint: "Pista",
        puzzle: "Acertijo",
        timeOut: "¡Se Acabó el Tiempo!",
        tryAgain: "Intentar de Nuevo",
        startGameFirst: "¡Por favor, primero inicia el juego!"
    }
};

// How to add a new language:
// 1. Add a new language code (e.g., 'it' for Italian) as a key in the translations object
// 2. Copy the structure from 'en' and translate all the values
// Example:
/*
    it: {
        gameTitle: "Missione Enigmi",
        timeElapsed: "Tempo Trascorso",
        startButton: "Inizia il Gioco",
        finalPuzzle: "Enigma Finale",
        enterPassword: "Inserisci Password",
        cancel: "Annulla",
        submit: "Invia",
        congratulations: "Congratulazioni!",
        yourTime: "Il Tuo Tempo",
        hint: "Suggerimento",
        puzzle: "Enigma"
    }
*/

// The game will automatically detect the user's browser language
// If the language is not available, it will default to English
// You can force a specific language by changing the 'language' setting in config.js