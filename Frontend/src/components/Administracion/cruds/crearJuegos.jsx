import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveJuegos } from '../services';

function CrearJuegos() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [lanzamiento, setLanzamiento] = useState("");
    const [plataformas, setPlataformas] = useState("");

    const inputFileRef = useRef();

    const handleSubmit = (juegosData) => {
        saveJuegos(juegosData = {
            nombre: nombre,
            descripcion: descripcion,
            lanzamiento: lanzamiento,
            plataformas: plataformas,
            imagen: inputFileRef.current.files[0],
        })
            .then((response) => {
                handleClose()
                window.location.reload()

            });
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear juego</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear juego</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre del juego" name='juego' onChange={(event) => { setNombre(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccionar imagen</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="descripcion">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control placeholder="Descripcion" name='descripcion' onChange={(event) => { setDescripcion(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="lanzamiento">
                            <Form.Label>Lanzamiento</Form.Label>
                            <Form.Control placeholder="Lanzamiento" name='lanzamiento' onChange={(event) => { setLanzamiento(event.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="plataformas">
                            <Form.Label>Plataformas</Form.Label>
                            <Form.Control placeholder="Plataformas" name='plataformas' onChange={(event) => { setPlataformas(event.target.value) }} />
                        </Form.Group>

                        

                        {/* <Row className="mb-3">
                            <Form.Group as={Col} controlId="modalidad">
                                <Form.Select className='mb-3' name='modalidad' onChange={(event) => { setModalidad(event.target.value) }}>
                                    <option>Seleccioná una modalidad</option>
                                    <option value="extensivo">Extensivo</option>
                                    <option value="intensivo">Intensivo</option>
                                    <option value="conversación">Conversación</option>
                                </Form.Select>
                            </Form.Group>
                        </Row> */}
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Agregar juegos</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearJuegos;