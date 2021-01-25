import React, { useEffect, useState } from "react"
import "../styles/headerStyle.css"
import quotes from "../quotes/quotes"

const QuotesCant = () => {
    const [cantQuotes, setCantQuotes] = useState(0);

    function obtenerCantidad() {
        setCantQuotes(quotes.length);
    }

    useEffect(obtenerCantidad, []);

    return (
        <div className="quotesCant">
            <p className="cantidadQuotesText">Hay {cantQuotes} frases para que leas!</p>
        </div>
    )
}

export default QuotesCant