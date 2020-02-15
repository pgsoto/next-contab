import React, { useState, useEffect } from "react"
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import Tabla from '../components/Tabla'
import ModalCliente from './cliente'
import ModalPagos from './pagos'

const API_URL = process.env.API_URL

const Clientes = () => {
    const [data, setData] = useState({ clientes: [] });
    const [cliente, setClient] = useState(null);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    useEffect(() => {
        getClientes()
    }, []);

    const getClientes = () => {
        axios(`${API_URL}/cliente`).then(res => setData(res.data))
    }

    return (
        <>
            <h1>Agenda de Clientes</h1>
            <Button ariant="outline-primary" onClick={() => setShow1(true)}>Nuevo Cliente</Button>
            <Tabla data={data.clientes} setClient={setClient} handleShow2={() => setShow2(true)} />
            <ModalCliente show={show1} onHide={() => setShow1(false)} />
            <ModalPagos show={show2} onHide={() => setShow2(false)} cliente={cliente} setClient={() => setClient(false)}/>
            {JSON.stringify(cliente)}
            <h1>asd</h1>
            {JSON.stringify(show2)}


        </>
    )
}

const stringify = ({ data }) => {
    return (
        <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
    )
}

export default Clientes