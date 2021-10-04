import React from "react";
import { PropsAndState } from './components/PropsAndState'
import { Quote } from "./modules/Quote"

export const Home = () => (
    <>
        <h2><Quote /></h2>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"LD"} />
    </>
)
