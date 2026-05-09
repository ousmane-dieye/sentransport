import { useState } from "react";


function Test() {
    const [compteur, modifierCompteur] = useState(0);
    const [nom, setNom] = useState("Ousmane")
    
  return (
    <div className="Test" >
        <input value={nom} onChange={(e) => { setNom(e.target.value); console.log(e.target.value)}}/> 
        
    </div>
  );
}

export default Test;