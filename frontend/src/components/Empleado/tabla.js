import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavbarTable from "./NavbarTable";
import './Navbar.css';
import Pagination from 'react-bootstrap/Pagination'
import * as AiIcons from "react-icons/ai";

import * as BsIcons from "react-icons/bs";

const data = [
    // { id: 1, persona: "Proveedor", estado: "Aprobado" }
    { persona: "Seguro de vida", estado: "", otroEstado: ""},
    { persona: "Documentacion para acceso a obra", estado: "", otroEstado: ""}
]


class tabla extends React.Component {
    state = {
        data: data,
        form: {
            // id: '',
            denominacion: '',
            documetacion: '',
            fechaCarga: '',
            observaciones: '',
            grupo: '',
            estado: '',
            otraAccion: '',
        },
        modalInsertar: false,
        modalEditar: false,
    };



    onChange = fecha => {
        this.setState({ fecha: fecha });
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true });
    }


    ocultarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    }

    mostrarModalEditar = (registro) => {
        this.setState({ modalEditar: true, form: registro });
    }


    ocultarModalEditar = () => {
        this.setState({ modalEditar: false });
    }

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modalInsertar: false });
    }

    editar = (dato) => {
        var contador = 0;
        var lista = this.state.data;
        lista.map((registro) => {
            if (dato.id == registro.id) {
                // lista[contador].persona=dato.persona;
                // lista[contador].estado=dato.estado;
            }
            contador++;
        });
        this.setState({ data: lista, modalEditar: false });
    }

    eliminar = (dato) => {
        var opcion = window.confirm("Desea eliminar el registro " + dato.id);
        if (opcion) {
            var contador = 0;
            var lista = this.state.data;
            lista.map((registro) => {
                if (registro.id == dato.id) {
                    lista.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: lista });
        }
    }

    render() {
        return (
            <>
                <NavbarTable />
                <Container>

                    <br />
                    <center><h3>Empleado Agustin Perez</h3></center>
                    <center><h3>DNI: 42624303</h3></center>
                    <center><h3>CUIT: 123456789</h3></center>
                    <br />
                    {/* <Button color="success" onClick={() => this.mostrarModalInsertar()}>Nuevo</Button> */}
                    <br /><br />
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Documentacion</th>
                                <th>Estado</th>
                                <th> </th>
                                <th> </th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    {/* <td>{elemento.id}</td> */}
                                    <td>{elemento.persona}</td>
                                    <td>{elemento.estado}
                                    <Button className="aprobado">
                                            <BsIcons.BsCheckCircle />
                                            Pendiente
                                        </Button>
                                    </td>
                                   
                                    <td>{elemento.otroEstado}
                                        <Button color="primary" onClick={() => this.mostrarModalEditar(elemento)}>Subir</Button>
                                        <Button color="danger" onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                                    </td>






                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Registro</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>
                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="persona"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Apellido:
                            </label>
                            <input
                                className="form-control"
                                name="estado"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()}>
                            Insertar
                        </Button>
                        <Button color="danger" onClick={() => this.ocultarModalInsertar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Subir archivos</h3></div>
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <label>
                                Documentacion a subir:
                            </label>
                            <input
                                className="form-control"
                                name="persona"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.persona}
                            />
                        </FormGroup>

                        <FormGroup>
                            <input type="file" />
                            {/* <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            /> */}
                        </FormGroup>

                      

                        {/* <FormGroup>
                            <label>
                                Estado:
                            </label>
                            <input
                                className="form-control"
                                name="estado"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.estado}
                            />
                        </FormGroup> */}
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Subir
                        </Button>
                        <Button color="danger" onClick={() => this.ocultarModalEditar()}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
               
            </>


        );
    }

}


export default tabla;