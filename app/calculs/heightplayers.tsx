type HeightPlayersProps = {
    joueurs: string[];
};

const HeightPlayers = ({ joueurs }: HeightPlayersProps) => {
    console.log(joueurs);
    return (
        <div className="flex flex-col gap-2">
            {joueurs.map((joueur, index) => (
                <div className="" key={index}>{joueur}</div>
            ))}
        </div>
    )
}

export default HeightPlayers;