import React, { Component } from "react"
import "../styles/style.css"
import firebaseConfig from '../../Firebase/firebaseConfig';


class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            alert: false,
            alertData: {},
            flipCard: false,
            messageSuccessfull: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    resetForm() {
        this.refs.contactForm.reset();
    }

    // Enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
        e.preventDefault();

        // Valores obtenidos de los inputs
        const params = {
            name: this.inputName.value,
            source: this.inputSource.value,
            quote: this.textAreaQuote.value,
            other: this.textAreaOther.value
        };

        // Validamos que no se encuentren vacios los campos requeridos del formularios
        if (params.name && params.source && params.quote) {
            this.handleToggle();
            // "params" se envia a firebase database
            const db = firebaseConfig.database().ref('contactForm').push(params).then(() => {
                console.log('El mensaje fue enviado exitosamente');
            }).catch(() => {
                console.log('El mensaje no pudo ser enviado');
            });
            this.resetForm();
        }
    }

    handleToggle() {
        this.setState((prevState) => {
            console.log(prevState)
            return { ...prevState, flipCard: !prevState.flipCard }
        })
    }

    render() {
        let envelopeStyle = "envelope";
        this.state.flipCard ? envelopeStyle = "envelope active" : envelopeStyle = "envelope";
        return (
            <>
                <div class="contact-wrapper">
                    <div class={envelopeStyle}>
                        <div class="back paper"></div>
                        <div class="content">
                            <div class="form-wrapper">
                                <form onSubmit={this.sendMessage} ref='contactForm' >
                                    <div class="top-wrapper">
                                        <div className='input'>
                                            <label>Nombre del autor/autora</label>
                                            <input type='text' id='name'
                                                placeholder='Autor/autora' ref={name => this.inputName = name} required />
                                        </div>
                                        <div className='input'>
                                            <label>Lo leiste en:</label>
                                            <input type='text' id='source' placeholder='Lo lei en...' ref={source => this.inputSource = source} required />
                                        </div>
                                    </div>
                                    <div className='bottom-wrapper'>
                                        <div className='input'>
                                            <label>Frase que queres compartir </label>
                                            <textarea id='quote'
                                                rows='quote' ref={quote => this.textAreaQuote = quote} required>
                                            </textarea>
                                        </div>
                                        <div className='input'>
                                            <label htmlFor='message'>Algo que me quieras compartir</label>
                                            <textarea id='other'
                                                rows='other' ref={other => this.textAreaOther = other}>
                                            </textarea>
                                        </div>
                                        <button class="submit-card" type='submit'>Enviar!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="front paper"></div>
                    </div>
                </div>
            </>
        )
    }
}


export default Formulario