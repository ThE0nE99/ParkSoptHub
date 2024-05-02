import React, { useState } from 'react';
import appFirebase from "../firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [registrando, setRegistrando] = useState(false);

    const functAutenticacion = async (e) => {
        e.preventDefault();

        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (!correo || !contraseña) {
            alert("Por favor, ingresa un correo electrónico y una contraseña.");
            return;
        }

        const auth = getAuth(appFirebase);

        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                alert("¡Cuenta creada exitosamente!");
            } else {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                alert("¡Inicio de sesión exitoso!");
            }
        } catch (error) {
            if (registrando) {
                alert("Error al crear la cuenta. Por favor, verifica tus datos.");
            } else {
                alert("Error al iniciar sesión. Por favor, verifica tu correo electrónico y contraseña.");
            }
        }
    }

    return (
        <div>
            <form onSubmit={functAutenticacion}>
                <input type="text" placeholder="Ingresar Email" id="email" />
                <input type="password" placeholder="Ingresar contraseña" id="password" />
                <button>{registrando ? "Registrarse" : "Iniciar Sesión"}</button>
            </form>
            <h4>
                {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                <button onClick={() => setRegistrando(!registrando)}>
                    {registrando ? "Iniciar Sesión" : "Registrarse"}
                </button>
            </h4>
        </div>
    )
}

export default Login;
