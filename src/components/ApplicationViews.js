import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route> 

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>
            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
              <CustomerCard />
            </Route>
            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees">
              <EmployeeCard />
            </Route>
            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
              <LocationCard />
            </Route>
        </>
    )
}