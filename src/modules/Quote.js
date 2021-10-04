import { useEffect, useState } from "react";

export const Quote = () => {  
    const [ quote, setQuote ] = useState([])

    useEffect(() => {
        getQuoteById(4).then((quoteObj) => setQuote(quoteObj));
}, []);

    return(
        <> 
            <div className="quote">
                <p className="quote__text">{quote.text}</p>
                <p className="quote__author">Author: {quote.author}</p>
                <button onClick={() => setQuote(quote[Math.floor(Math.random()*quote.length)])}>
        Click for Random Quote
      </button>
            </div>
    </>
    );
};

const getQuoteById = (id) => {
    return fetch("https://type.fit/api/quotes/")
        .then((response) => response.json())
        .then((jsonRes) => jsonRes[id]);
};