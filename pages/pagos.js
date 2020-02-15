import { Button, Modal } from 'react-bootstrap'

const ModalPagos = ({ show, onHide, cliente }) => {
    return (
        <Modal size="lg" show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Listado pagos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {JSON.stringify(cliente)}
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

export default ModalPagos