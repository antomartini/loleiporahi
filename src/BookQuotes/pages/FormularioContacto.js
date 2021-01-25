import React, {Component} from "react"
import "../styles/style.css"
import firebaseConfig from '../../Firebase/firebaseConfig';

class Formulario extends React.Component {
    // inicializamos nuestro estado inicial
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
        
    }

    // Mostrar una alerta cuando se envia el formulario
    showAlert(type, message) {
        this.setState({
            alert: true,
            alertData: { type, message }
        });
        setTimeout(() => {
            this.setState({ alert: false });
        }, 4000)
    }

    // Con esta funcion borramos todos los elementos del formulario
    resetForm() {
        this.refs.contactForm.reset();
    }

    // Funcion para enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
        // Detiene la acción predeterminada del elemento
        e.preventDefault();

        // Creamos un objeto con los valores obtenidos de los inputs
        const params = {
            name: this.inputName.value,
            source: this.inputSource.value,
            quote: this.textAreaQuote.value,
            other: this.textAreaOther.value
        };

        // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
        if (params.name && params.source && params.quote && params.other) {
            this.handleToggle();
            // enviamos nuestro objeto "params" a firebase database
            const db = firebaseConfig.database().ref('contactForm').push(params).then(() => {
                // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
                console.log('Your message was sent successfull');              
            }).catch(() => {
                console.log('Your message could not be sent');
            });
            // limpiamos nuestro formulario llamando la funcion resetform
            this.resetForm();
        } else {
            // En caso de no llenar los elementos necesario despliega un mensaje de alerta
            this.showAlert('warning', 'Please fill the form');
        };
    }

    handleToggle(){
        console.log("handleToggle")
        this.setState((prevState) => {
            console.log(prevState)
            return {...prevState,  flipCard : !prevState.flipCard}
        })
    }

    render() {
        let envelopeStyle = "envelope";
        this.state.flipCard ? envelopeStyle="envelope active" : envelopeStyle="envelope";
        return (
            <div>
                { this.state.alert ?
                    <div className='container'>
                        {this.state.alertData.message}
                    </div> : null}
                <div class="contact-wrapper">
                    <div class={envelopeStyle}>
                        <div class="back paper"></div>
                        <div class="content">
                            <div class="form-wrapper">
                                <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                                    <div class="top-wrapper">
                                        <div className='input'>
                                            <label>Nombre del autor/autora</label>
                                            <input type='text' id='name'
                                                placeholder='Autor/autora' ref={name => this.inputName = name} />
                                        </div>
                                        <div className='input'>
                                            <label>Lo leiste en:</label>
                                            <input type='text' id='source' placeholder='Lo lei en...' ref={source => this.inputSource = source} />
                                        </div>
                                    </div>
                                    <div className='bottom-wrapper'>
                                        <div className='input'>
                                            <label>Frase que queres compartir </label>
                                            <textarea id='quote'
                                                rows='quote' ref={quote => this.textAreaQuote = quote}>
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
            </div>
        )
    }
}


export default Formulario