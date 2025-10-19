import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <h1 className="scroll-m-20 text-center py-10
      text-4xl font-extrabold tracking-tight text-balance">
      Tournoi
    </h1>
 <Card>
    <Input type="text" placeholder="Entrez votre nom" />
 </Card>

    </div>
  );
}
