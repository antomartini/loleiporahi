import React, { useEffect, useState } from "react"
import { BrowserRouter, NavLink, Route, Switch, useLocation } from "react-router-dom";
import "./App.css"
import AboutMe from "./BookQuotes/pages/AboutMe";
import BookQuotes from "./BookQuotes/pages/BookQuotes";
import Footer from "./BookQuotes/components/Footer";
import FormularioContacto from "./BookQuotes/pages/FormularioContacto";
import Header from "./BookQuotes/components/Header";
import Razones from "./BookQuotes/pages/Razones";
import quotes from "./BookQuotes/quotes/quotes"
import QuotesCant from "./BookQuotes/components/QuotesCant";
import { createBrowserHistory } from "history";

function App() {
    const [visibleButton, setVisibleButton] = useState(true);
    const [loadQuote, setLoadQuote] = useState(false);
    const history = createBrowserHistory();
    
    // Inicializo la aplicacion con una frase estatica
    const [quote, setQuote] = useState({
        book: "Rayuela",
        author: "Julio Cortazar",
        quote: "“¿A vos no te pasa que te despertás a veces con la exacta conciencia de que en ese momento empieza una increíble equivocación?”",
    });

    // Cargo la imagen del background
    useEffect(() => visibleButton ? document.getElementById('body').className = 'backgroundQuote' : null, []);

    // Cargo otra frase
    function handleClick() {
        if (loadQuote) return;
        try {
            setLoadQuote(true);
            const randNum = Math.floor(Math.random() * quotes.length)
            setQuote({
                book: quotes[randNum].book,
                author: quotes[randNum].author,
                quote: quotes[randNum].quote,
            })
        }
        catch {
            console.log("No se pudo leer la frase correctamente");
        }
        setLoadQuote(false);
    }

    // Navegacion entre paginas
    function navigateHome() {
        setVisibleButton(true);
        document.getElementById('body').className = 'backgroundQuote';       
    }

    function navigateAboutMe() {
        setVisibleButton(false);
        document.getElementById('body').className = 'backgroundAboutMe';
    }

    function navigateIniciativa() {
        setVisibleButton(false);
        document.getElementById('body').className = 'backgroundIniciativa';
    }

    function navigateForm() {
        setVisibleButton(false);
        document.getElementById('body').className = 'backgroundForm';
    }

    function setConfig() {
        if (history.location.pathname !== '/') {
            setVisibleButton(false);
        }
        if (history.location.pathname === '/loleiporahi/') {
            setVisibleButton(true);
        }
    }

    useEffect(setConfig, visibleButton);
    
    return (
        <BrowserRouter>
            <div className="containerSuperior">
                <div className="header-container">
                    <Header />
                    <div className="nav-container">
                        <NavLink className="navlink" to="/loleiporahi/" onClick={navigateHome}>Home</NavLink>
                        <NavLink className="navlink" to="/loleiporahi/about" onClick={navigateAboutMe} >Sobre Mi</NavLink>
                        <NavLink className="navlink" to="/loleiporahi/iniciativa" onClick={navigateIniciativa} >Conoce mas</NavLink>
                        <NavLink className="navlink" to="/loleiporahi/form" onClick={navigateForm} >Comparti tu frase!</NavLink>
                    </div>
                </div>
                {visibleButton ? <div class="buttonContainer">
                    <button id="get-another-quote-button"
                        onClick={handleClick}>
                        DAME OTRA FRASE!
                        </button> </div>
                    : null
                }
            </div>
            <div className="mainContainer">
                <div className="wrapper">
                    <Switch>
                        <Route path="/loleiporahi/about"><AboutMe /></Route>
                        <Route path="/loleiporahi/iniciativa"><Razones /></Route>
                        <Route path="/loleiporahi/form"><FormularioContacto /></Route>
                        <Route path="/loleiporahi/"><BookQuotes quote={quote} /></Route>
                        <Route path="/"><BookQuotes quote={quote} /></Route>
                    </Switch>
                </div>
            </div>
            <div className="footerContainer">
                <Footer />
                {visibleButton ? <QuotesCant /> : null}
            </div>
        </BrowserRouter>
    )


}
export default App