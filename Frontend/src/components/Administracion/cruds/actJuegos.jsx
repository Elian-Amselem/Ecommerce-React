import React, {useState, useEffect, useRef} from 'react';

import { getJuegos, updateJuegos} from '../services';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ActJuegos(){
    const [juegos, setJuegos] = useState([]);
    const [juegosSel, setJuegoSel] = useState("");
    const [datosJuego, setDatosJuegos] = useState({});

    useEffect(() =>{
        async function cargaJuegos() {
            const response = await getJuegos();

            if (response.status === 200) {
                setJuegos(response.data.juegos)
            }
        }
        cargaJuegos()
    }, [])

    const handleSelJuego = (event) => {
        const selectedJuego = juegos.find((juego) => juego._id === event.target.value)
        setJuegoSel(event.target.value)
        setDatosJuegos(selectedJuego)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef();

    const handleSubmit = () => {
        const newNombre = datosJuego.nombre;
        const newImagen = inputFileRef.current?.file[0];
        const newDescripcion = datosJuego.descripcion;
        const newLanzamiento = datosJuego.lanzamiento;
        const newPlataformas = datosJuego.plataformas

        const datosNuevos = {
            nombre: newNombre,
            imagen: newImagen,
            descripcion: newDescripcion,
            lanzamiento: newLanzamiento,
            plataformas: newPlataformas
        }

        const confirmActualizar = window.confirm(`¿Vas a actualizar el juego mi rey?`);
        
        if(confirmActualizar){
            updateJuegos(juegosSel, datosNuevos)
            .then((response) => {
                handleClose()
                window.location.reload()
            } )
        }

    };

    return(
        <div>
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar juego</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Actualizar juego</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                        <Form.Group controlId="juego">
                                <Form.Label>Seleccionar juego</Form.Label>
                                <Form.Select value={juegosSel} onChange={handleSelJuego}>
                                    <option>Seleccionar juego</option>
                                    {juegos.map((juego) =>(
                                        <option key={juego._id} value={juego._id}>
                                            {juego.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                    {juegosSel && (
                        <div>
                            <Form.Group controlId="nombre">
                            <Form.Label>Nombre del juego</Form.Label>
                            <Form.Control defaultValue={datosJuego.nombre} name="nombre" onChange={(event) => {setDatosJuegos({...datosJuego, nombre: event.target.value})}}></Form.Control>
                            </Form.Group>
                        </div>
                    )}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Actualizar juego</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>

                </Modal>
        </div>
    )

}


export default ActJuegos;