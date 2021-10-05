import React from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'
import { useHistory } from "react-router-dom"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  const history = useHistory();

  return (
    <section className="animal card" >
        <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
        </Link>
        <button type="button"
            onClick={() => history.push(`/animals/${animal.id}/edit`)}>
            Edit
        </button>
    </section>
)
}



  
//   return (
//     <div className="card">
//       <div className="card-content">
//         <picture>
//          {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
//         </picture>
//         <h3>Name: <span className="card-petname">
//           {animal.name}
//         </span></h3>
//         <p>Breed: {animal.breed}</p>
//         <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
//         <Link to={`/animals/${animal.id}`}>
//           <button>Details</button>
//         </Link>
//         <button type="button"
//   onClick={() => history.push(`/animals/${animal.id}/edit`)}>
//   Edit
// </button>

//       </div>
//     </div>
//   );
// }


/* Cut Out line between 
<picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
*/


/*import React from "react";
import "./Animal.css";


export const AnimalCard = ({ animal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
      </div>
    </div>
  );
}
*/


/*
export const AnimalCard = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animals__breed">Breed: {animal.breed}</div>
    </section>
)


export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
        
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  );
*/