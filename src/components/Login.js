import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import appFirebase from '../firebase';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(appFirebase) 

export const Login = () => {
    const [registro, setRegistro] = useState(false)

    const handlerSubmit = async(e)=>{
        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.contraseña.value;

        if(registro) {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }
    return (
        <><div>Login</div>
        <div className="col-md-4">
            <div className="mt-5 ms-5">
                <h1>{registro? "Registrate": "Inicia seccion"}</h1>
                <Form onSubmit={handlerSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Direccion de Email: </label>
                        <input type="email" className="form-control" placeholder="Ingresar email" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresar contraseña" id="contraseña" required/>
                    </div>
                    <Button className="btn btn-primary" type="submit">{registro? 'registrate':'inicia seccion'}
                    </Button>
                </Form>
                <div className="form-group">
                    <Button className="btn btn-secondary mt-4 form-control" onClick={()=> setRegistro(!registro)}>
                        {registro? 'ya tienes una cuenta? Inicia seccion':'no tienes cuenta? Registrate'}
                    </Button>
                </div>
            </div>
        </div></>
    )
 }

 export default Login