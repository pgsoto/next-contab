import { Table, Button } from 'react-bootstrap'

const Tabla = ({ data, setClient, handleShow2 }) => {
    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Rut</th>
                    <th>Nombre</th>
                    <th>Domicilio</th>
                    <th>Teléfono</th>
                    <th>Pagos</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((x, k) => {
                        return (
                            <tr key={k}>
                                <td>{x.rut}</td>
                                <td>{x.nombre}</td>
                                <td>{x.domicilio}</td>
                                <td>{x.telefono}</td>
                                <td><Button variant="outline-info" onClick={(a) => { setClient(x); handleShow2(); }}>Ver</Button></td>
                                {/* <td>{moment(x.timestamp).format('DD-MM-YYYY HH:mm')}</td> */}
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Tabla