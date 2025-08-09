// Game Configuration File
const config = {
    // Language setting (en, pl, de, fr, es)
    language: 'en',
    
    // Starting time in seconds (e.g., 3600 = 1 hour, 1800 = 30 minutes)
    startTimeSeconds: 1800,
    
    // Final password to complete the game
    finalPassword: 'ERIC',

    // Puzzle answers - edit these to match the correct answers for each puzzle
    puzzleAnswers: [
        "43232",   // Puzzle 1
        "14",  // Puzzle 2
        "3", // Puzzle 3
        "4",   // Puzzle 4
        "5",  // Puzzle 5
        "6",  // Puzzle 6
        "7", // Puzzle 7
        "8"   // Puzzle 8
    ],
    
    // Puzzles array - each puzzle has a title and hints with time penalties
    puzzles: [
        {
            title: "Eric Smells",
            hints: [
                {
                    text: "Look for the book with the golden spine on the third shelf",
                    penalty: 30 // seconds
                },
                {
                    text: "The answer lies in Chapter VII, page 42",
                    penalty: 60
                },
                {
                    text: "The keyword is hidden in the Latin inscription: 'Veritas Lux Mea'",
                    penalty: 90
                }
            ]
        },
        {
            title: "Stinky boy",
            hints: [
                {
                    text: "Count the stars in the constellation of Orion",
                    penalty: 25
                },
                {
                    text: "The brightest star points to the North",
                    penalty: 50
                },
                {
                    text: "Connect the dots to form the letter 'E'",
                    penalty: 75
                }
            ]
        },
        {
            title: "Smelly Man",
            hints: [
                {
                    text: "The gears must align at midnight",
                    penalty: 20
                },
                {
                    text: "Turn the largest gear counterclockwise three times",
                    penalty: 45
                },
                {
                    text: "The combination is 3-7-12",
                    penalty: 70
                }
            ]
        },
        {
            title: "The Crystal Prism",
            hints: [
                {
                    text: "Shine the light through the prism at a 45-degree angle",
                    penalty: 35
                },
                {
                    text: "The rainbow reveals a hidden pattern",
                    penalty: 55
                },
                {
                    text: "Focus on the indigo beam - it shows the number 7",
                    penalty: 80
                }
            ]
        },
        {
            title: "The Musical Box",
            hints: [
                {
                    text: "Listen to the melody - it repeats every 8 notes",
                    penalty: 30
                },
                {
                    text: "The missing note is C sharp",
                    penalty: 60
                },
                {
                    text: "Play the sequence: C-E-G-C#-A",
                    penalty: 90
                }
            ]
        },
        {
            title: "The Mirror Labyrinth",
            hints: [
                {
                    text: "Not all reflections show the truth",
                    penalty: 25
                },
                {
                    text: "The silver mirror shows the correct path",
                    penalty: 50
                },
                {
                    text: "Turn left, right, right, left, straight",
                    penalty: 85
                }
            ]
        },
        {
            title: "The Alchemist's Formula",
            hints: [
                {
                    text: "Mercury and sulfur must be combined first",
                    penalty: 40
                },
                {
                    text: "Add salt when the mixture turns gold",
                    penalty: 65
                },
                {
                    text: "The final ingredient is quicksilver - add 3 drops",
                    penalty: 95
                }
            ]
        },
        {
            title: "The Coded Message",
            hints: [
                {
                    text: "Every third letter is significant",
                    penalty: 30
                },
                {
                    text: "Use Caesar cipher with shift of 3",
                    penalty: 55
                },
                {
                    text: "The decoded message reads: 'ENIGMA IS THE KEY'",
                    penalty: 100
                }
            ]
        }
    ]
};

// Example of how to add more puzzles:
// Just add more objects to the puzzles array following the same structure:
/*
{
    title: "Your Puzzle Title",
    hints: [
        {
            text: "First hint text",
            penalty: 30 // Time penalty in seconds
        },
        {
            text: "Second hint text",
            penalty: 60
        },
        {
            text: "Third hint text",
            penalty: 90
        }
    ]
}
*/
