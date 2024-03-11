function getFelhasznalonev(){
    let joFelhasz = false
    let Felhasznalonev = document.getElementById('inputBox');
    let FelhasznalonevValue = Felhasznalonev.value;
    let Beírszöveg = document.getElementById("Beírtszöveg")
    let joJelszo = false
    let Jelszo = document.getElementById('Jelszó_box')
    let JelszoValue = Jelszo.value;
    let köv_window = false
    let Cím2 = document.getElementById('Cím2')
    
    if (FelhasznalonevValue  == "AdAm084723JIkwéaojKUiwdjIknfsoIWhjLjoh@Đ@[ĐÄÄ<Đ|Ä$ŁÄä$]í]n[fálŁlnk$"){
        joFelhasz = true
    }
    else{
        joFelhasz = false
    }
    if (JelszoValue == "+"){
        joJelszo = true
    }
    else{
        joJelszo = false
    }
    const fs = require('fs');

// A fájl elérési útvonala és neve
    const filename = "C:\Users\everl\OneDrive\Dokumentumok\Python_programs\Web_server\Válasz.txt";
// A fájlban lévő tartalom
    const content = 'Ez a szöveg lesz beleírva a fájlba.';

}
