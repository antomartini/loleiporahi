import React from "react"
import "../styles/components.css"

const Header = () => {
    return (
        <div class="contentHeader">
            <div class="content__container">
                <p class="content__container__text">
                    Lo lei por ahi
                </p>
                <ul class="content__container__list">
                    <li class="content__container__list__item">.</li>
                    <li class="content__container__list__item">en un libro</li>
                    <li class="content__container__list__item">en la calle</li>
                    <li class="content__container__list__item">en twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default Header