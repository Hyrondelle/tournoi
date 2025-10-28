export const calculs = (tableauJoueurs: string[]) => {
    const nombreJoueurs = tableauJoueurs.length;

    switch (nombreJoueurs) {
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 3;
        case 5:
            return 4;
    }
}