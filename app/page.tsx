"use client";

import { Button } from "@/components/ui/button";
import { Card,CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import {useState} from "react";

export default function Home() {
  const [nomJoueur, setNomJoueur] = useState("");
  const [tableauJoueurs, setTableauJoueurs] = useState<string[]>([]);
  const [compteurJoueurs, setCompteurJoueurs] = useState(1);
  const[joueursOk, setJoueursOk] = useState(false);

  const addJoueur =(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    tableauJoueurs.push(nomJoueur);
    setCompteurJoueurs(compteurJoueurs + 1);
    setNomJoueur("");
    console.log(tableauJoueurs);
    
  }
  const validPlayers = () => {
    setJoueursOk(true);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="
      text-4xl font-extrabold tracking-tight text-balance">
      Tournoi
    </h1>
    {!joueursOk ? 
    <div>
 <Card className="w-full max-w-sm">
  <CardDescription>
    Nom du joueur {compteurJoueurs} ?
  </CardDescription>
  <form onSubmit={addJoueur}>
    <Input type="text" placeholder="Entrez un nom" value={nomJoueur}  onChange={(e) => setNomJoueur(e.target.value)} />
    <Button type="submit" className="bg-green-500 text-white hover:bg-green-600">Validez</Button>
    <Button type="button" className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => validPlayers()}>Terminer</Button>
    </form>
 </Card>
    <div>
      {tableauJoueurs.map((joueur, index) => (
        <div key={index}>
          <p>{joueur}</p>
        </div>
      ))}
    </div>
    </div>
     : <div></div>
  }
    </div>
  );
}
