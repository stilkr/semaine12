var jeu = document.getElementById("jeu");
var reinit = document.getElementById("reset");
var tabP1=[], tabP2=[], divSelectionnee, tourJoueur1=true, 
	couleurJoueur, casesCocheesP1=-1, casesCocheesP2=-1, 
	c1p1=0, c2p1=0, c3p1=0, l1p1=0, l2p1=0, l3p1=0, diagonale1p1=0, diagonale2p1=0,
	c1p2=0, c2p2=0, c3p2=0, l1p2=0, l2p2=0, l3p2=0, diagonale1p2=0, diagonale2p2=0,
	totalCasesCochees=0;


function verifieVictoire() {													
	if (tourJoueur1==false) {																
		var id=tabP1[casesCocheesP1];														
			if (id.indexOf("c1")!=-1) {															
				c1p1+=1;																		
			if (id.indexOf("l1")!=-1) {														
				l1p1+=1;																	
				diagonale1p1+=1;
				}																				
			else if (id.indexOf("l2")!=-1) {												
				l2p1+=1;																	
				}
			else if (id.indexOf("l3")!=-1) {
				l3p1+=1;
				diagonale2p1+=1;
				}
			}
			
		else if	(id.indexOf("c2")!=-1) {
			c2p1+=1;
			if (id.indexOf("l1")!=-1) {
				l1p1+=1;
				}
			else if (id.indexOf("l2")!=-1) {
				l2p1+=1;
				diagonale1p1+=1;
				diagonale2p1+=1;
				}
			else if (id.indexOf("l3")!=-1) {
				l3p1+=1;
				}
			}
			
		else if	(id.indexOf("c3")!=-1) {
			c3p1+=1;
			if (id.indexOf("l1")!=-1) {
				l1p1+=1;
				diagonale2p1+=1;
				}
			else if (id.indexOf("l2")!=-1) {
				l2p1+=1;
				}
			else if (id.indexOf("l3")!=-1) {
				l3p1+=1;
				diagonale1p1+=1;
				}
			}
		
		if (c1p1 === 3 || c2p1 === 3 || c3p1 === 3 || l1p1 === 3 || l2p1 === 3 || l3p1 ===3 || diagonale1p1 ===3 || diagonale2p1 ===3) {
			alert("Le Joueur 1 a gagné!");
			reinitialiser();
			}
			
		else if (totalCasesCochees===9) {
			alert("Egalité!");
			reinitialiser();
			}
		}
		
		else {
			var id=tabP2[casesCocheesP2];														
			if (id.indexOf("c1")!=-1) {															
				c1p2+=1;																		
				if (id.indexOf("l1")!=-1) {														
					l1p2+=1;																	
					diagonale1p2+=1;
				}																				
				else if (id.indexOf("l2")!=-1) {												
					l2p2+=1;																	
				}
				else if (id.indexOf("l3")!=-1) {
					l3p2+=1;
					diagonale2p2+=1;
				}
			}
			
			else if	(id.indexOf("c2")!=-1) {
				c2p2+=1;
				if (id.indexOf("l1")!=-1) {
					l1p2+=1;
				}
				else if (id.indexOf("l2")!=-1) {
					l2p2+=1;
					diagonale1p2+=1;
					diagonale2p2+=1;
				}
				else if (id.indexOf("l3")!=-1) {
					l3p2+=1;
				}
			}
			else if	(id.indexOf("c3")!=-1) {
				c3p2+=1;
				if (id.indexOf("l1")!=-1) {
					l1p2+=1;
					diagonale2p2+=1;
				}
				else if (id.indexOf("l2")!=-1) {
					l2p2+=1;
				}
				else if (id.indexOf("l3")!=-1) {
					l3p2+=1;
					diagonale1p2+=1;
				}
			}
			if (c1p2 === 3 || c2p2 === 3 || c3p2 === 3 || l1p2 === 3 || l2p2 === 3 || l3p2 ===3 || diagonale1p2 ===3 || diagonale2p2 ===3) {
				alert("Le Joueur 2 a gagné!");
				reinitialiser();
			}
			else if (totalCasesCochees===9) {
				alert("Egalité!");
				reinitialiser();
			}
		}
}


function cocherCase(e) {											  	
	divSelectionnee=e.target;														
	if (divSelectionnee.classList.contains("vide")) {								
		if (tourJoueur1) {															
			couleurJoueur="joueur1";												
			tourJoueur1=false;														 
			casesCocheesP1++;														
			tabP1[casesCocheesP1]=divSelectionnee.id;								
		}
		else {																		
			couleurJoueur="joueur2";												
			tourJoueur1=true;														
			casesCocheesP2++;														
			tabP2[casesCocheesP2]=divSelectionnee.id;								
		}		
		divSelectionnee.classList.remove("vide");									
		divSelectionnee.classList.add(couleurJoueur);								
		totalCasesCochees+=1;
		verifieVictoire();															
	}
	else {
		alert("cette case a déjà été cochée!");										
	}	
		
}


function reinitialiser(){												
	var tabDiv=jeu.getElementsByTagName("div");														
	for(var i=0; i<tabDiv.length; i++) {															
		if (tabDiv[i].classList.contains("joueur1") || tabDiv[i].classList.contains("joueur2")) {	
			tabDiv[i].className="case vide";														
		}
	}
	tourJoueur1=true;
	tabP1=[];
	tabP2=[];
	casesCocheesP1=-1;
	casesCocheesP2=-1;
	c1p1=0;
	c2p1=0;
	c3p1=0;
	l1p1=0;
	l2p1=0;
	l3p1=0;
	c1p2=0;
	c2p2=0;
	c3p2=0;
	l1p2=0;
	l2p2=0;
	l3p2=0;
	diagonale1p1=0;
	diagonale2p1=0;
	diagonale1p2=0;
	diagonale2p2=0;
	totalCasesCochees=0;
}


reinit.addEventListener("click", reinitialiser, false);							
jeu.addEventListener("click", cocherCase, false);								