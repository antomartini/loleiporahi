import React, { useState } from "react"
import "../styles/style.css"

function BookQuotes(props) {
    let quote = props.quote;
    return (
        <div class="cajaPost">
            <div class="cajavacia"></div>
            <div class="post">
                <div id="quote-content" >
                    {quote.quote}
                </div>
                <p class="author">
                    <span id="quote-title-dash">—</span> <span id="quote-title">{quote.author}</span> <br />
                    <span id="quote-source">Lo lei por ahi en: {quote.book}</span>
                </p>
            </div>
        </div>
    )
}

export default BookQuotes