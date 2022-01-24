// Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj, Kk, Ll, Mm, Nn, Oo, Pp, Qq, Rr, Ss, Šš, Zz, Žž, Tt, Uu, Vv, Ww, Õõ, Ää, Öö, Üü, Xx, Yy
const alphabet =  ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "Š", "š", "Z", "z", "Ž", "ž", "T", "t", "U", "u", "V", "v", "W", "w", "Õ", "õ", "Ä", "ä", "Ö", "ö", "Ü", "ü", "X", "x", "Y", "y"];

//const firstCell = document.querySelector("#first-cell");
//const firstCell = document.querySelector(".letter");
let nextCell = [0, 0];
let words = [];
let playerWord = '';

fetch("words.txt")
.then(response => response.text())
.then(data => {
    words = data.split('\n');

    let currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);

    document.addEventListener("keydown", event => {
        console.log(event);

        let nextCellEl = document.querySelector(`.letter[data-x="${nextCell[0]}"][data-y="${nextCell[1]}"]`);
        const key = event.key.toUpperCase();

        if (alphabet.includes(key) && nextCell[0] <= 4 ) {
            nextCellEl.innerText = key;
            playerWord += key;
            nextCell[0]++;
        } else if ( key == "BACKSPACE" && nextCell[0] > 0 ) {
            nextCell[0]--;
            nextCellEl = document.querySelector(`.letter[data-x="${nextCell[0]}"][data-y="${nextCell[1]}"]`);
            nextCellEl.innerText = " ";
            playerWord = playerWord.slice(0, 1);
        } else if ( key == "ENTER" && nextCell[0] == 5 ) {
            console.log("enter");

            for ( let i = 0; i < playerWord.length; i ++ ) {
                let letter = playerWord.charAt(i).toLowerCase();
                console.log(letter);

                const correctCellEL = document.querySelector(`.letter[data-x="${nextCell[0]}"][data-y="${nextCell[1]}"]`);

                if ( letter == currentWord.charAt(i) ) {
                    currentCellEl.classList.add("correct-letter");
                    console.log("õige täht, õiges kohas", letter);
                } else if ( currentWord.includes(letter) ) {
                    console.log("õige täht, vales kohas", letter);
                    // lisa siiia "present letter", lisa stiil 
            }

        }

    });

});
