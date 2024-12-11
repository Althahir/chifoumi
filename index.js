var reponseJoueur, hasard, jeuOrdi, jeuJoueur;
var victoire = 0;
var defaite = 0;
var egalite = 0;
var rejouer = "O";

const random = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

while (rejouer === "O") {
  hasard = parseInt(random(1, 3));

  reponseJoueur = parseInt(
    prompt("Que voulez vous jouer ? 1-Pierre, 2-Feuille, 3-Ciseaux")
  );

  switch (hasard) {
    case 1: {
      jeuOrdi = "Pierre";
      break;
    }
    case 2: {
      jeuOrdi = "Feuille";
      break;
    }
    case 3: {
      jeuOrdi = "Ciseaux";
      break;
    }
  }

  switch (reponseJoueur) {
    case 1: {
      jeuJoueur = "Pierre";
      break;
    }
    case 2: {
      jeuJoueur = "Feuille";
      break;
    }
    case 3: {
      jeuJoueur = "Ciseaux";
      break;
    }
  }

  if (jeuOrdi === jeuJoueur) {
    console.log(
      "Vous avez joué ",
      jeuJoueur,
      " et l'ordinateur a joué ",
      jeuOrdi,
      " EGALITE"
    );
    egalite++;
  } else {
    if (
      (jeuJoueur === "Pierre" && jeuOrdi === "Ciseaux") ||
      (jeuJoueur === "Feuille" && jeuOrdi === "Pierre") ||
      (jeuJoueur === "Ciseaux" && jeuOrdi === "Feuille")
    ) {
      console.log(
        "Vous avez joué ",
        jeuJoueur,
        " et l'ordinateur à joué",
        jeuOrdi,
        "VICTOIRE"
      );
      victoire++;
    } else if (
      (jeuJoueur === "Pierre" && jeuOrdi === "Feuille") ||
      (jeuJoueur === "Feuille" && jeuOrdi === "Ciseaux") ||
      (jeuJoueur === "Ciseaux" && jeuOrdi === "Pierre")
    ) {
      console.log(
        "Vous avez joué ",
        jeuJoueur,
        " et l'ordinateur à joué",
        jeuOrdi,
        "DEFAITE"
      );
      defaite++;
    }
  }

  console.log(
    "Victoire : ",
    victoire,
    "\nDefaite :",
    defaite,
    "\nEgalité :",
    egalite,
    "\n"
  );
  rejouer = prompt("Voulez vous rejouer ? O-Oui N-Non");
  rejouer = rejouer.toUpperCase();
}
