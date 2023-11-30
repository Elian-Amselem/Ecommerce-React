import React, {useState, useEffect} from 'react';

import { getJuegos, deleteJuegos} from '../services';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BorrarJuegos(){
    const [juegos, setJuegos] = useState([]);
    const [juegosSel, setJuegosSel] = useState({});

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
        setJuegosSel(event.target.value)
        console.log(juegosSel)
    }

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () =>{
        const  confirmDelete = window.confirm(`¿Seguro que queres deletear el juego pana?`);

        if(confirmDelete){
            deleteJuegos(juegosSel)
        .then((response) => {
            handleClose()
            window.location.reload()
        })
        .catch((error) =>{
            console.log(error)
        })

    }
    };
    
    return(
        <div>
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Borrar juego</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Borrar juego</Modal.Title>
                    </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="idioma">
                                <Form.Select value={juegosSel} onChange={handleSelJuego}>
                                    <option>Seleccionar juego</option>
                                    {juegos.map((juego) =>(
                                        <option key={juego._id} value={juego._id}>
                                            {juego.nombre} - {juego.descripcion} - {juego.lanzamiento} - {juego.plataformas}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                    </Form>
                </Modal.Body>

                    <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleDelete}>Borrar juego</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default BorrarJuegos;
