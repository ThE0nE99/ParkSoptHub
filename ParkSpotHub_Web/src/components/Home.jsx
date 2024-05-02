import React from "react";
import appFirebase from "../firebase.config";
import { getAuth, signOut } from "firebase/auth";

const Home = ({ correoUsuario }) => {
    // Obtiene el objeto de autenticación de Firebase
    const auth = getAuth();

    return (
        <div>
            <h2>Este es el home {correoUsuario}</h2>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    );
};

export default Home;