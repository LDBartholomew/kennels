import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from './animal/AnimalForm'
import { useState } from "react"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

/*import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"*/

export const ApplicationViews = ( { isAuthenticated, setAuthUser  } ) => {
// 3:45 Tue 10-5-21 Commented Out
//   const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

// const setAuthUser = (user) => {
// 	sessionStorage.setItem("kennel_customer", JSON.stringify(user))
// 	setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
// }

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route> 

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              	{isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
	              <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
	              <Register setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/animals/:animalId(\d+)">
               <AnimalDetail />
            </Route>
          
            <Route path="/animals/create">
              <AnimalForm />
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route exact path="/customers">
              <CustomerList />
            </Route>
            {/* Render the employee list when http://localhost:3000/employees */}
            <Route exact path="/employees">
              <EmployeeList />
            </Route>
            {/* Render the location list when http://localhost:3000/locations */}
            <Route exact path="/locations">
              <LocationList />
            </Route>
        </>
    )
}
