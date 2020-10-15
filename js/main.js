//GIOCO Dadi
var dadoPlayer = Math.floor((Math.random() * 5 ) + 1 );

var dadoPC = Math.floor((Math.random() * 5) + 1);

if (dadoPlayer > dadoPC) {
  document.getElementById("tiroPlayer").innerHTML= 'Ti e\' uscito' + dadoPlayer ;
  document.getElementById("tiroPC").innerHTML= 'Il tuo avversario ha tirato' + dadoPC ;
  document.getElementById("sentenza").innerHTML= '...Hai vinto!';
}
  else if (dadoPlayer < dadoPC) {
    document.getElementById("tiroPlayer").innerHTML= 'Ti e\' uscito' + dadoPlayer ;
    document.getElementById("tiroPC").innerHTML= 'Il tuo avversario ha tirato' + dadoPC ;
    document.getElementById("sentenza").innerHTML= '...Hai perso :( Premi F5 la pagina per riprovare';
}
  else {
    document.getElementById("tiroPlayer").innerHTML= 'Ti e\' uscito' + dadoPlayer ;
    document.getElementById("tiroPC").innerHTML= 'Il tuo avversario ha tirato' + dadoPC ;
    document.getElementById("sentenza").innerHTML= '...Hai pareggiato! Premi F5 la pagina per riprovare';
}




//AUTENTICAZIONE email
// insert email
var emailInsert = prompt("Inserisci la tua Email").toLowerCase().trim();

// emails registered
var emailsBox = ['marrazzo.pietroalfonso@gmail.com', 'laura.vallanzaghi@hotmail.it', 'lucrezia.nebboli@gmail.com', 'andrea.trevisani@gmail.com', 'castiglioni_fabio@gmail.com' ] ;

// emails base false
var emailFound = false;

// autentication cycle
for (var i = 0; i < emailsBox.length; i++) {
  var items = emailsBox[i];

  // email founded
  if (emailInsert == items) {
    emailFound = true;
  }
}

// sentence
if (emailFound == true) {
  document.getElementById("accesso").innerHTML= 'logIn effettuato';
}
else {
  document.getElementById("accesso").innerHTML= 'Email non riconosciuta, riprovare';
}
