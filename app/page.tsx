"use client";

import { Button } from "@/components/ui/button";
import { Card,CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import {useState} from "react";

export default function Home() {
  const [nomJoueur, setNomJoueur] = useState("");
  var tableau: string[] =[];

  const addJoueur =(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    tableau.push(nomJoueur);
    setNomJoueur("");
    console.log(tableau);
    
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="
      text-4xl font-extrabold tracking-tight text-balance">
      Tournoi
    </h1>
 <Card className="w-full max-w-sm">
  <CardDescription>
    Nom du joueur?
  </CardDescription>
  <form onSubmit={addJoueur}>
    <Input type="text" placeholder="Entrez un nom" value={nomJoueur}  onChange={(e) => setNomJoueur(e.target.value)} />
    <Button type="submit" >Validez</Button>
    </form>
 </Card>

    </div>
  );
}
