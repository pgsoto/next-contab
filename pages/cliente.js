import { Button, Modal } from 'react-bootstrap'

const ModalCliente = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* {JSON.stringify(cliente)} */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cerrar
          </Button>
                {/* <Button variant="primary" onClick={onHide}>
                    Guardar
          </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCliente