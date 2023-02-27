import React, from 'react';

const UserTable = ({ users }) => {
    const renderTableHeader = () => {
    // Obtenemos los nombres de las propiedades de los objetos
    const headerNames = Object.keys(users[0]);
    return headerNames.map((header) => <th key={header}>{header.toUpperCase()}</th>);
};

// La funcion rendertableheader toma la entrara users que esta contiene los nombres de las propiedades de los objetos en JSON


const renderTableData = () => {
    return users.map((user) => {
        return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
        );
    });
};

// El metodo render llama a las funciones rendertableheader y rendertabledata renderiza la tabla completa

return (
    <table>
        <thead>
            <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
    </table>
);
};

export default UserTable;

// Esta compilacion del codigo cuenta con la funcion handledown que permite hacer click en la view de admin que permite tener acceso al documento u archivo JSON

/*const handleDownload = () => {
    const data = JSON.stringify(users);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.json';
    link.click();
};

return (
    <div>
        <table>
        <thead>
            <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
    </table>
    <button onClick={handleDownload}>Download JSON</button>
    </div>
);*/

//export default UserTable;
