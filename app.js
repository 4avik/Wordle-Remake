// Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj, Kk, Ll, Mm, Nn, Oo, Pp, Qq, Rr, Ss, Šš, Zz, Žž, Tt, Uu, Vv, Ww, Õõ, Ää, Öö, Üü, Xx, Yy
const alphabet =  ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "Š", "š", "Z", "z", "Ž", "ž", "T", "t", "U", "u", "V", "v", "W", "w", "Õ", "õ", "Ä", "ä", "Ö", "ö", "Ü", "ü", "X", "x", "Y", "y"];
const firstCell = document.querySelector("#first-cell");

document.addEventListener("keydown", event => {
    console.log(event);

    
    const key = event.key.toUpperrCase();
        if (alphabet.includes(key) ) {
        firstCell.innerText = key;
    }
});