import React, {useState} from "react";

function age(){

    const [ageplus, setAgeplus] = useState(0);

    const agein = () => {
  
        setAgeplus(ageplus + 1);

    }


    return(
        <p>
            age : {ageplus}
            <button onClick={agein}>increase</button>
        </p>
    );

}

export default age