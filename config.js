// Game Configuration File (updated to 11 puzzles with variable hint counts)
const config = {
    language: 'en',
    startTimeSeconds: 1800,
    finalPassword: 'ERIC',
    puzzleAnswers: [
        "43232","14","3","4","5","6","7","8","9","10","11"
    ],
    puzzles: [
        {
            title: "Hints",
            hints: [
                { text: "Look for the book with the golden spine on the third shelf", penalty: 30 },
                { text: "The answer lies in Chapter VII, page 42", penalty: 60 },
                { text: "The keyword is hidden in the Latin inscription: 'Veritas Lux Mea'", penalty: 90 },
                { text: "Check the footnotes at the bottom of the page", penalty: 120 },
                { text: "The hidden word appears in red ink", penalty: 150 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Count the stars in the constellation of Orion", penalty: 25 },
                { text: "The brightest star points to the North", penalty: 50 },
                { text: "Connect the dots to form the letter 'E'", penalty: 75 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "The gears must align at midnight", penalty: 20 },
                { text: "Turn the largest gear counterclockwise three times", penalty: 45 },
                { text: "The combination is 3-7-12", penalty: 70 },
                { text: "Check the smallest gear for the final clue", penalty: 95 },
                { text: "A hidden notch indicates the true starting position", penalty: 120 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Shine the light through the prism at a 45-degree angle", penalty: 35 },
                { text: "The rainbow reveals a hidden pattern", penalty: 55 },
                { text: "Focus on the indigo beam - it shows the number 7", penalty: 80 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Listen to the melody - it repeats every 8 notes", penalty: 30 },
                { text: "The missing note is C sharp", penalty: 60 },
                { text: "Play the sequence: C-E-G-C#-A", penalty: 90 },
                { text: "Notice the rhythm matches a heartbeat", penalty: 120 },
                { text: "The final note unlocks the box", penalty: 150 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Not all reflections show the truth", penalty: 25 },
                { text: "The silver mirror shows the correct path", penalty: 50 },
                { text: "Turn left, right, right, left, straight", penalty: 85 },
                { text: "Ignore the golden mirrors", penalty: 110 },
                { text: "The shortest path avoids all traps", penalty: 140 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Mercury and sulfur must be combined first", penalty: 40 },
                { text: "Add salt when the mixture turns gold", penalty: 65 },
                { text: "The final ingredient is quicksilver - add 3 drops", penalty: 95 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Every third letter is significant", penalty: 30 },
                { text: "Use Caesar cipher with shift of 3", penalty: 55 },
                { text: "The decoded message reads: 'ENIGMA IS THE KEY'", penalty: 100 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Set the small hand to the number of corners on a square", penalty: 25 },
                { text: "Minutes equal vowels in the word 'MECHANISM'", penalty: 50 },
                { text: "Seconds are the difference between 15 and 8", penalty: 75 },
                { text: "The chime sounds only when the clock is correct", penalty: 100 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Only prime-numbered switches can be ON at the same time", penalty: 30 },
                { text: "Binary 1010 equals what in decimal?", penalty: 55 },
                { text: "Flip switches 2, 3, and 5, then add the labels", penalty: 90 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Trace the path that never crosses itself", penalty: 30 },
                { text: "Cities with an even number of roads form the key", penalty: 60 }
            ]
        }
    ]
};
