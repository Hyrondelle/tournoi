type HeightPlayersProps = {
    joueurs: string[];
};

const HeightPlayers = ({ joueurs }: HeightPlayersProps) => {
    console.log(joueurs);
    return (
        <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-1/2">
            {joueurs.map((joueur, index) => (
                <div className="border border-gray-300 rounded-md p-2" key={index}>{joueur}</div>
            ))}
        </div>
        <div className="flex w-1/2">
        <svg height="100" width="100">

    <polyline points="0,25,50,25,50,100,100,75" stroke="blue" stroke-width="3" fill="none" />

</svg>
        </div>
        </div>
    )
}

export default HeightPlayers;