import React from "react";

export const Time = () => (
    <p> Today's date is {new Date().toLocaleString() + ""} </p>
)

// {new Date().toLocaleString() + ""}      current date & time
// {(new Date().getDate() + 1)}
// {new Date().getDate().toLocaleString() + ""}
// {new Date(Date.now() + 1000 * 3600 * 24)}