import HeightPlayers from "./heightplayers";

export const calculs = (tableauJoueurs: string[]) => {
    const nombreJoueurs = tableauJoueurs.length;

    switch (nombreJoueurs) {
        case 8:
            return <HeightPlayers joueurs={tableauJoueurs} />;
        case 3:
            return 2;
        case 4:
            return 3;
        case 5:
            return 4;
            default:
                return console.log("Nombre de joueurs invalide");
                break;
    }
}
