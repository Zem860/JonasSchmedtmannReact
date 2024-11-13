import StarRating from "./StarRating";
import { useState } from "react";
const StarTest = () => {
    const [r, setR] = useState(0);
    return ( 
        <div>

            <StarRating maxRating={10} color={"#773322"} size={24} onSetRate={setR} />
            <p>This movie is rated {r} {r==1?"star":"stars"}</p>
        </div>

     );
}
 
export default StarTest;