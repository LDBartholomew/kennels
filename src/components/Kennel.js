import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
         
        </>
    )
}

//   <Time />

//refactor

// import React from "react"
// import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "./ApplicationViews"
// import "./Kennel.css"
// import { Time } from "./Time"


// export const Kennel = () => (
//     <>
//         <NavBar />
//         <ApplicationViews />
//         <Time />
//     </>
// )







/*import React from "react"
import { AnimalCard } from "./animal/AnimalCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard } from "./customer/CustomerCard";
import { PropsAndState } from "./PropsAndState";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css" */

//Added NavBar and App Views Below
/*export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="LD" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
) */