import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavbarTable from "./NavbarTable";
import Selected from "../Selected";
import './Navbar.css';
import Pagination from 'react-bootstrap/Pagination'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import empleado from '../Empleado/tabla';

const data = [
    // { id: 1, persona: "Proveedor", estado: "Aprobado" }
    { denominacion: "empleado1", documetacion: "Seguro de vida", fechaCarga: "", observaciones: "En estado aprobado", grupo: "Texto", estado: "", otraAccion: "" },
    { denominacion: "vehiculo1", documetacion: "VTV", fechaCarga: "", observaciones: "En estado aprobado", grupo: "Texto", estado: "", otraAccion: "", link: "" },
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
                <Container >
                    <br />
                    <center><h3>Documentación solicitada</h3></center>
                    <br />
                    {/* <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nuevo</Button> */}
                    <br /><br />
                    <Table className="contenedor">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Denominacion</th>
                                <th>Documentacion</th>
                                <th>Fecha de carga</th>
                                <th>Observaciones</th>
                                <th>Grupo</th>
                                <th>Estado</th>
                                <th> </th>
                                <th> </th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    {/* <td>{elemento.id}</td> */}
                                    <td>{elemento.denominacion}</td>
                                    <td>{elemento.documetacion}</td>
                                    {/* <td>{elemento.fechaVencimiento}
                                         <DatePicker selected={this.state.fecha} onChange={this.onChange} /> 
                                    </td> */}
                                    <td>{elemento.fechaCarga}
                                        12/12/2021
                                        {/* <DatePicker selected={this.state.fecha} onChange={this.onChange} /> */}
                                    </td>
                                    <td>{elemento.observaciones}</td>
                                    <td>{elemento.grupo}</td>
                                    <td>{elemento.estado}
                                        <Button className="aprobado" onClick={() => this.mostrarModalEditar(elemento)}>

                                            <BsIcons.BsCheckCircle />
                                            Aprobado
                                        </Button>
                                    </td>
                                    {/* <td>{elemento.accion}
                                        <Button color="danger">
                                            Subir
                                        </Button>
                                    </td> */}
                                    <td>{elemento.otraAccion}
                                        <Button color="danger">
                                            <Link to="empleado" className="linkEmpleado"><AiIcons.AiOutlineArrowRight /></Link>
                                        </Button>
                                    </td>




                                    {/* <Button color="primary" onClick={()=> this.mostrarModalEditar(elemento)}>Editar</Button>{" "}
                                        <Button color="danger" onClick={()=> this.eliminar(elemento)}>Eliminar</Button> */}
                                    <tr>

                                    </tr>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Editar</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>

                        </FormGroup>

                        <FormGroup>
                            <label>
                                Persona:
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
                            <label>
                                Apellido:
                            </label>
                            <input
                                className="form-control"
                                name="estado"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.estado}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Editar
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