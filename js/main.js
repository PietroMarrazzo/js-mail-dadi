//GIOCO Dadi
var dadoPlayer = Math.floor((Math.random() * 5 ) + 1 );
console.log();

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
