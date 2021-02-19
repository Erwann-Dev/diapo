/*
 * Diapo qui change l'image tout les "temps_passer" temps et remise a 0 du temps quand on clique sur un des buttun
 */
/*
! Var zone
*/
var temps_passer = 10000; // temps en ms
var temps_decompte = temps_passer / 1000;
var n = 1;
var isplay = 0;
/*
! Next / Back zone
*/
function changeImage(n) {
	element = document.querySelector('#picture');
	var v = element.getAttribute('src');
	image = n.toString() + '.jpg';
	if (v == element.getAttribute('src')) v = image;

	element.setAttribute('src', v);
	temps_moin();
	clearTimeout(time);
}

function next() {
	// suivant button
	n++;
	if (n > 4) {
		n = 1;
	}
	temps_decompte = temps_passer / 1000;
	changeImage(n);
	clearInterval(change);
	change = setInterval(next, temps_passer);
	temps_decompte = temps_passer / 1000;
}

function gestion_timer() {
	change = setInterval(next, temps_passer);
	temps_moin();
}

function back() {
	// precedent button
	n--;
	if (n < 1) {
		n = 4;
	}
	temps_decompte = temps_passer / 1000;
	changeImage(n);
	clearInterval(change);
	change = setInterval(next, temps_passer);
	temps_decompte = temps_passer / 1000;
}

function temps_moin() {
	// decompte le temps restant et l'affiche
	if (temps_decompte > 0) {
		document.getElementById('bip').innerHTML =
			temps_decompte + ' secondes restantes';
		temps_decompte = temps_decompte - 1;
	} else {
		document.getElementById('bip').innerHTML = ' Suivante !';
		temps_decompte = temps_passer / 1000;
	}
	time = setTimeout(temps_moin, 1000);
}

/*
! Play / Pause zone
*/

function pause() {
	clearTimeout(time);
	document.getElementById('bip').innerHTML = '\u23f8';
	clearInterval(change);
	isplay = 1;
}

function play() {
	change = setInterval(next, temps_passer);
	time = setTimeout(temps_moin, 1000);
	isplay = 0;
}
/*
 ! Zone event keyboard
 */

function quelle_touche(evenement) {
	var touche = evenement.keyCode
  console.log(touche)
  if(touche==32 && isplay==0){
    pause()
  }
  else if(touche==32 && isplay==1){
    play()
  }
  else if(touche==113){
    back()
  }
  else if(touche==100){
    next()
  }
  else if(touche==38){
    n = 1
    temps_decompte = temps_passer / 1000;
    changeImage(n);
    clearInterval(change);
    change = setInterval(next, temps_passer);
    temps_decompte = temps_passer / 1000;
  }
  else if(touche==233){
    n = 2
    temps_decompte = temps_passer / 1000;
    changeImage(n);
    clearInterval(change);
    change = setInterval(next, temps_passer);
    temps_decompte = temps_passer / 1000;
  }
  else if(touche==34){
    n = 3
    temps_decompte = temps_passer / 1000;
    changeImage(n);
    clearInterval(change);
    change = setInterval(next, temps_passer);
    temps_decompte = temps_passer / 1000;
  }
  else if(touche==39){
    n = 4
    temps_decompte = temps_passer / 1000;
    changeImage(n);
    clearInterval(change);
    change = setInterval(next, temps_passer);
    temps_decompte = temps_passer / 1000;
  }
  
}