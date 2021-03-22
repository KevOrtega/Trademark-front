// Dev's modules
import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group"
import { addUser, getUser } from "../../Requests"
import Validation from '../../Validation'

// Form stylesheets
import './form.css'

// Form components
import Input from "../../atoms/Input"
import { Message } from "../Container"
import {ButtonSubmit} from "../Button"

const formReset = (initialState, setFormState) => {
    document.getElementById('form').reset()
    setFormState(initialState)
}

const handleChange = ({target}, formState, setFormState) => {
    const validate = Validation(target)
    const value = target.name + 'value'

    const newFormState = {...formState}
    
    validate ? newFormState[target.name] = true : newFormState[target.name] = false
    newFormState[value] = target.value

    setFormState(newFormState)
}

export const FormLogIn = ({isFormOn, setAccount}) => {
    const initialState = {
        email: null,
        password: null,
        emailvalue: null,
        passwordvalue: null
    }

    const [formState, setFormState] = useState(initialState)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const user = getUser(formState.emailvalue, formState.passwordvalue)
        if(user) setAccount(user)
    }
    
    const { email, password } = formState
    return <CSSTransition
        in={isFormOn}
        timeout={1000}
        classNames="form-log-in-"
        unmountOnExit={true}
        onExit={() => formReset(initialState, setFormState)}
    >            
        <form className="form" action="#" id="form"> 
            <Input name="email" placeholder="email" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={email} />
            <Message isOn={email === null ? null : !email}>email es incorrecto</Message>

            <Input name="password" placeholder="contraseña" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={password} />
            <Message isOn={password === null ? null : !password}>la contraseña debe tener mínimo 1 letra en minusculas, 1 en mayúsculas, 1 número y debe tener al menos 8 carácteres</Message>
            
            <ButtonSubmit isDisabled={Object.values(formState).includes(false) || Object.values(formState).includes(null) ? true : false}
            styles="form-submit" 
            onClick={handleSubmit}>iniciar sesión</ButtonSubmit>
        </form>
    </CSSTransition>
}

export const FormSignIn = ({isFormOn, setAccount}) => {
    const initialState = {
        name: null,
        lastname: null,
        email: null,
        password: null,
        namevalue: null,
        lastnamevalue: null,
        emailvalue: null,
        passwordvalue: null,
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        const { namevalue, lastnamevalue, emailvalue, passwordvalue } = formState

        addUser({
            name: namevalue,
            lastname: lastnamevalue,
            email: emailvalue,
            password: passwordvalue
        })

        const user = getUser(emailvalue, passwordvalue)
        if(user) setAccount(user)
    }
    
    const { name, lastname, email, password } = formState
    return <CSSTransition
        in={isFormOn}
        timeout={1000}
        classNames="form-sign-in-"
        unmountOnExit={true}
        onExit={() => formReset(initialState, setFormState)}
        >
            <form className="form" action="#" id="form">
                <Input name="name" placeholder="nombre" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={name} />
                <Message isOn={name === null ? null : !name}>el nombre debe tener entre 3 y 16 letras</Message>

                <Input name="lastname" placeholder="apellido" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={lastname} />
                <Message isOn={lastname === null ? null : !lastname}>el apellido debe tener entre 3 y 16 letras</Message>

                <Input name="email" placeholder="email" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={email} />
                <Message isOn={email === null ? null : !email}>email incorrecto</Message>

                <Input name="password" placeholder="contraseña" handleChange={(e) => handleChange(e, formState, setFormState)} inputState={password} />
                <Message isOn={password === null ? null : !password}>la contraseña debe tener mínimo 1 letra en minusculas, 1 en mayúsculas, 1 número y debe tener al menos 8 carácteres</Message>


                <ButtonSubmit isDisabled={Object.values(formState).includes(false) || Object.values(formState).includes(null) ? true : false}
                styles="form-submit" 
                onClick={handleSubmit}>registrarse</ButtonSubmit>
            </form>
        </CSSTransition>
}