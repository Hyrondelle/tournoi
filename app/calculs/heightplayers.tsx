import { Button } from "@/components/ui/button";

type HeightPlayersProps = {
    joueurs: string[];
};

const HeightPlayers = ({ joueurs }: HeightPlayersProps) => {
    const vainqueur = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.textContent);
        return e.currentTarget.textContent
    }
    console.log(joueurs);
    return (
        <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-1/3">
            {joueurs.map((joueur, index) => (
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => vainqueur(e)} className="border border-gray-300 rounded-md p-2" key={index}>{joueur}</Button>
            ))}
        </div>
        <div className="flex flex-col w-1/3">
            <svg width="100%" height="100%">
                
            <polyline points="0,25,50,25,50,45,100,45" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="0,65,50,65,50,45,100,45" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="0,125,50,125,50,145,100,145" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="0,165,50,165,50,145,100,145" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="0,225,50,225,50,245,100,245" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="0,265,50,265,50,245,100,245" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="0,325,50,325,50,345,100,345" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="0,365,50,365,50,345,100,345" stroke="blue" strokeWidth="3" fill="none" />
            </svg>
            
        </div>
        <div className="flex w-1/3">
        {vainqueur && <Button>{vainqueur}</Button>}
        </div>
        </div>
    )
}

export default HeightPlayers;