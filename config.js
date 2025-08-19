// Game Configuration File (updated to 11 puzzles with variable hint counts)
const config = {
    language: 'en',
    startTimeSeconds: 1800,
    finalPassword: 'ERIC',
    puzzleAnswers: [
        "43254","14","Velcro","319","16","31124141111","Globe","4","1259","Find the","Cake!"
    ],
    puzzles: [
        {
            title: "Hints",
            hints: [
                { text: "The Playlist seems to have 5 songs in 5 colors. I wonder if there is something else on all the cards with that colour! ", penalty: 30 },
                { text: "There are keys on the border of all the cards that have matching colours to the playlist", penalty: 60 },
                { text: "Add up each colour of key that you find and match the order to the same colour you see in the Playlist. You start with all the yellow keys you can find, followed by purple keys.'", penalty: 90 },
                { text: "Make sure you include all the keys you find on packaging, as well as on the individual cards. There would be 4 yellow keys total, and 3 purple keys. The code begins with 43?", penalty: 120 },
                { text: "Password is 43254", penalty: 150 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Skeleton Keys seem to be the answer to the riddle! I wonder what they could mean…", penalty: 25 },
                { text: "The Skeleton keys seem to have different notches on the keys. You may need to add them!", penalty: 50 },
                { text: "Add up all notches on the Skeleton keys and they equal 14!", penalty: 75 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "There’s a dinosaur code that matches the card; you may need a pencil!", penalty: 20 },
                { text: "There are lines under each dinosaur; you will need to trace the lines to spell a Letter for each line", penalty: 45 },
                { text: "The First Line code solution is the letter V. Starting at the top left Plesiosaur (think water dinosaur), you trace a line down to the bottom brown Stegosaursus, back to the brown T-rex in the top right corner. Tracing it, it spells the letter V!", penalty: 70 },
                { text: "The rest of our dinosaur code spells VELC??", penalty: 95 },
                { text: "The answer is Velcro", penalty: 120 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Crack the Code! The first hint is that the first number is the number 3, by looking at the first and second hints, as the number can’t be 4 or 8. Then the code must be 3??", penalty: 35 },
                { text: "The third hint on the card shows us that the last number is 9. So 3?9 must be the code", penalty: 55 },
                { text: "The last missing digit is 1. The middle number must be 5 or 1, but we eliminated 8, 5, and 4. Therefore, the code is 319!", penalty: 80 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Consider the sequence: 1, 4, 9, ?, 25.", penalty: 30 },
                { text: "What’s five times five? ", penalty: 60 },
                { text: "1² = 1", penalty: 90 },
                { text: "1² = 1, 2² = 4, 3² = 9, 5² = 25.", penalty: 120 },
                { text: "The answer is 16. The missing number is solved as 4² = 16", penalty: 150 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "The first word spells CANDY", penalty: 25 },
                { text: "The second word spells SWEETS", penalty: 50 },
                { text: "Each Word has a letter on the Scrabble tile. Note, there are 11 numbers and 11 tiles!", penalty: 85 },
                { text: "The code is CANDYSWEETS, starting from the top word followed by the bottom word.", penalty: 110 },
                { text: "The passcode is 31124141111", penalty: 140 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "The top clue you may need to turn upside down!", penalty: 40 },
                { text: "The letters now look like letters! The first number now looks like a “G”", penalty: 65 },
                { text: "The password is Globe", penalty: 95 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "The watch may be a clue!", penalty: 30 },
                { text: "What does a watch tell? Time! I wonder if the Clock may hold the clue.", penalty: 55 },
                { text: "4 is the answer. The 8 hand on a watch, when it moves 8 more times, shows 4 o'clock!", penalty: 100 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "What numbers are missing from the entire card?", penalty: 25 },
                { text: "The missing numbers mixed up are 9, 2 and 1, and 5 from the card. They might form the answer", penalty: 50 },
                { text: "Keep the numbers from lowest to highest!", penalty: 75 },
                { text: "The code is 1259", penalty: 100 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Li stands for Line, Le stands for Letter", penalty: 30 },
                { text: "On Line 1, on Letter 2, the answer is “F”", penalty: 55 },
                { text: "Code is Find the", penalty: 90 }
            ]
        },
        {
            title: "Hints",
            hints: [
                { text: "Connect the back panels and follow the Number 1 to the Letter. Find all 5 letters or punctuation to enter the Final Word!", penalty: 30 },
                { text: "Last Clue! The answer the Code CA_E! You’ll have to figure out the final answer by filling in the blank and typing in the code!", penalty: 60 }
            ]
        }
    ]
};
