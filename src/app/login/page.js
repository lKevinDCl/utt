"use client"
import React from "react"
import "./login.css"
import {login} from "../../services/firebase/auth"

export default function Login() {

    const [state,setState] = React.useState({ 
        email: "",
        password:""
    })

    function onChange(event){

        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onLogin(){
        /*
        const email =stae.email;
        const password =stae.password;

        esta linea es lo mismo que lo que esta escrito en la parte inferior.
        */

        const{email, password} = state;

        login(email, password);
    }

    return (
        <div className="container">
                <label for="">E-mail</label>
                <input name="email" onChange={onChange} alue={state.email} id="email" type="text" placeholder="user@e-mail.com"></input>
            
                <label for="">Password</label>
                <input name="password" onChange={onChange} value={state.password} type="password" id="" placeholder="password"></input>

                <div class ="checkbox">
                <input type="checkbox"></input>
                <p>recordar</p>
                </div>

                <button onClick={onLogin} class="button" type="button" value="Login">Login</button>
            </div>
        )
    }
