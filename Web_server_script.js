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
    
    if (FelhasznalonevValue  == ""){
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
}
