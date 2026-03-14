import { useState } from "react";

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const hindlesingle =()=>{
        const updateRuns = runs + 1;
setRuns(updateRuns);
    }
    const handleSix =() =>{
        const updateRuns = runs + 6;
        setRuns(updateRuns);
    }
    return(
        <div>
            <h3>player: Bangla Batsman</h3>
            {
                runs>50 && <p>You score : 50</p>
            }
            <h2>Scroe:{runs}</h2>
            <button onClick={hindlesingle}>singles</button>
            <button>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}