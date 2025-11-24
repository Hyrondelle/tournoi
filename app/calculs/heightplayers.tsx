import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Joueurs } from "../page";
import Player from "./player";


type HeightPlayersProps = {
    joueurs: Joueurs[];
};

const HeightPlayers = ({ joueurs }: HeightPlayersProps) => {
    const [player,setPlayer] = useState("")
    const [nbPlayers,setNbPlayers] =useState(0)
    //var players:string[] = []
    const [players,setPlayers] = useState<string[]>([])

    const vainqueur = (e: React.MouseEvent<HTMLButtonElement>) => {
        const name = e.currentTarget.textContent
        console.log(name);
        setPlayer(name)
        players.push(name)
        setNbPlayers(nbPlayers+1)
    }
    useEffect(()=>{
        console.log("use");
        
    },[nbPlayers])
    console.log(joueurs);
    return (
        <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-1/3">
            {joueurs.map((joueur, index) => (
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => vainqueur(e)} className="border border-gray-300 rounded-md p-2" key={index}>{joueur.name}</Button>
            ))}
        </div>
        <div className="flex flex-col w-1/3">
            <svg width="100%" height="100%">
                
            <polyline points="10,20,60,20,60,40,110,40" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="10,60,60,60,60,40,110,40" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="10,110,60,110,60,130,110,130" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="10,150,60,150,60,130,110,130" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="10,200,60,200,60,220,110,220" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="10,240,60,240,60,220,110,220" stroke="blue" strokeWidth="3" fill="none" />

            <polyline points="10,290,60,290,60,310,110,310" stroke="blue" strokeWidth="3" fill="none" />
            <polyline points="10,330,60,330,60,310,110,310" stroke="blue" strokeWidth="3" fill="none" />
            </svg>
            
        </div>
        <div className="flex flex-col gap-14 w-1/3 mt-5">
        {nbPlayers && Player(players)}
        </div>
        </div>
    )
}

export default HeightPlayers;