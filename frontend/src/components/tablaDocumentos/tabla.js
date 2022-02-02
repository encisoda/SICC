import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavbarTable from "./NavbarTable";
import './Navbar.css';
import Pagination from 'react-bootstrap/Pagination'
import * as AiIcons from "react-icons/ai";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, MenuItem, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

const data = [
    // { id: 1, persona: "Proveedor", estado: "Aprobado" }
    { persona: "seguro de vida", estado: "", otroEstado: "", otrotro: "" },
    { persona: "DNI", estado: "", otroEstado: "", otrotro: "" },
    { persona: "patentes", estado: "", otroEstado: "", otrotro: "" }

]


class tabla extends React.Component {
    state = {
        data: data,
        form: {
            // id: '',
            persona: '',
            estado: ''
        },
        modalInsertar: false,
        modalEditar: false,
    };

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
                lista[contador].persona = dato.persona;
                lista[contador].estado = dato.estado;
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
                    <center><h3>Documentos</h3></center>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Nuevo</Button>
                    <br /><br />
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Nombre</th>
                               
                                <th> </th>
                                <th> </th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    {/* <td>{elemento.id}</td> */}
                                    <td>{elemento.persona}</td>
                                    <td>{elemento.estado}</td>

                                    <td>{elemento.otroEstado}
                                        <Button color="primary" onClick={() => this.mostrarModalEditar(elemento)}>Asignar</Button>
                                        <Button color="danger" onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                                    </td>






                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Agregar</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                        
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Documento:
                            </label>
                            <input
                                className="form-control"
                                name="persona"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            
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
                        <div><h3>Asignar</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                         
                        </FormGroup>

                        <FormGroup>
                        <DropdownButton id="dropdown-basic-button" title="Empleado">
                                <Dropdown.Item href="#/action-1">empleado 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">empleado 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">empleado 3</Dropdown.Item>
                            </DropdownButton>
                        </FormGroup>
                      <br/>
                        <FormGroup>
                        <DropdownButton id="dropdown-basic-button" title="Vehiculo">
                                <Dropdown.Item href="#/action-1">vehiculo 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">vehiculo 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">vehiculo 3</Dropdown.Item>
                            </DropdownButton>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Asignar
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