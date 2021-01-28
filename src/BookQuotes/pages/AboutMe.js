import React from "react"
import "../styles/aboutandreasons.css"
import { GiBeerStein, GiBookshelf, GiWhiteCat, GiPizzaSlice, GiMoon, GiTreeBranch } from 'react-icons/gi';

function AboutMe(props) {
    return (
        <div className="aboutme">
            <div className="cardContent">
                <p className="classHola">¡Hey, hola!</p>
                <p className="aboutmeStyle">
                    Si hay una cosa en las que me considero que soy terrible es en las presentaciones.
                    Soy Anto, tengo 25 otoños y me gusta muchisimo explorar, innovar y crear cosas nuevas.
                    Estoy en continuo aprendizaje. Me encantan los desafios.
                    Estoy a punto de recibirme de Ingeniera en Informatica. Actualmente trabajo como desarrolladora (y en constante formacion).
                    Amo los animales. Me encanta leer.
                    Soy fan de las series. Lucho por un mundo mas diverso e inclusivo. En mundo de unos y ceros, vamos por la diversidad.
                    Mi pelo generalmente es un desastre. Muy enredado como la vida misma.
                    Soy fan y amante de la cerveza. Me gusta sacar fotos a la naturaleza y mirar la luna.
               </p>
                <br />
                <div className="classGustos"><GiBeerStein /> <GiBookshelf /> <GiWhiteCat /> <GiPizzaSlice /> <GiMoon /> <GiTreeBranch /> </div>
            </div>
        </div>
    )

}

export default AboutMe