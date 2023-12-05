import React, { useState, useEffect } from 'react';

import { getJuegos } from './services';

import CrearJuegos from './cruds/crearJuegos';
import ActJuegos from './cruds/actJuegos';
import BorrarJuegos from './cruds/borrarJuegos';

import Container from 'react-bootstrap/Container';



export const AdmJuegos = () => {
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        async function cargaJuegos() {
            const response = await getJuegos();

            if (response.status === 200) {
                setJuegos(response.data.juegos)
            }
        }
        cargaJuegos()
    }, [])

    return (
        <><Container>
            <CrearJuegos />
            <ActJuegos />
            <BorrarJuegos />
        </Container>
        </>
    )
}

export default AdmJuegos;