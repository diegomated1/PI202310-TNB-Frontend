import React, { useState } from "react";
import React, { useNavigate } from "react-router-dom";
import AdminCardsNavBar from "../../components/AdminCardsNavBar";
import


import React, { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();

// Aquí se pueden enviar los datos de registro a través de una solicitud HTTP

    console.log(`Registrando usuario ${username} con correo electrónico ${email} y contraseña ${password}`);
};

//bg-gradient-to-b from-gradientFrom to-gradientTo

return (
    <AdminCardsNavBar />
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
        />
        </div>
        <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
        />
        </div>
        <div>
            <label htmlFor="password">Contraseña:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
        />
        </div>
        <button type="submit">Registrarse</button>
    </form>
    );
};

export default RegisterForm;
