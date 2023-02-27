import React from 'react';
import styled from 'styled-components';

// el componente del gridcontainer de forma dinamica permitira la organizacion simplificada y opcional de los apartados del login como register, como asi mismo manejar el flex y grid de los margenes de los demas aspectos del sitio

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 20px;
    justify-items: center;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 20px;
`;

// los componentes tanto en maingrid como las variantes en item, grid container etc; se encuentran relacionadas con la configuracion del item.jsx

const MainGrid = () => {
return (
    <GridContainer>
        <GridItem>
            <h2>Login</h2>
                {/* Aquí va el componente de inicio de sesión */}
        </GridItem>
        <GridItem>
            <h2>Register</h2>
            {/* Aquí va el componente de registro */}
        </GridItem>
        <GridItem>
            <h2>Main</h2>
            {/* Aquí va el componente principal del sitio web */}
        </GridItem>
        <GridItem>
            <h2>Category</h2>
            {/* Aquí va el componente de categoría de productos */}
        </GridItem>
    </GridContainer>
);
};

export default MainGrid;
