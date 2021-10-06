import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight"
import { getRandomId } from "./modules/AnimalManager";
// import { getRandomId } from "../modules/AnimalManager"
import { PropsAndState } from './components/PropsAndState'

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <PropsAndState yourName={"LD"} />

      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};



// import React from "react";
// import { PropsAndState } from './components/PropsAndState'
// import { Quote } from "./modules/Quote"

// export const Home = () => (
//     <>
//         <h2><Quote /></h2>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>
//         <PropsAndState yourName={"LD"} />
//     </>
// )


