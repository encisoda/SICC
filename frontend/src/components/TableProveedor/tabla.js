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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const data = [
    // { id: 1, persona: "Proveedor", estado: "Aprobado" }
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },
    { denominacion: "Texto", documetacion: "Texto", fechaVencimiento: "", fechaCarga: "", observaciones: "Texto", grupo: "Texto", estado: "", accion: "", otraAccion: "" },




]


class tabla extends React.Component {
    state = {
        data: data,
        form: {
            // id: '',
            denominacion: '',
            documetacion: '',
            fechaVencimiento: '',
            fechaCarga: '',
            observaciones: '',
            grupo: '',
            estado: '',
            accion: '',
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
                    <center><h3>Documentacion solicitada</h3></center>
                    <br />
                    {/* <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nuevo</Button> */}
                    <br /><br />
                    <Table className="contenedor">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Denominacion</th>
                                <th>Documentacion</th>
                                <th>Fecha de vencimiento</th>
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
                                    <td>{elemento.fechaVencimiento}
                                        <DatePicker selected={this.state.fecha} onChange={this.onChange} />
                                    </td>
                                    <td>{elemento.fechaCarga}
                                        <DatePicker selected={this.state.fecha} onChange={this.onChange} />
                                    </td>
                                    <td>{elemento.observaciones}</td>
                                    <td>{elemento.grupo}</td>
                                    <td>{elemento.estado}
                                        <Button className="aprobado">
                                            <BsIcons.BsCheckCircle />
                                            Aprobado
                                        </Button>
                                    </td>
                                    <td>{elemento.accion}
                                        <Button color="danger">
                                            Subir
                                        </Button>
                                    </td>
                                    <td>{elemento.otraAccion}
                                        <Button color="danger">
                                            <AiIcons.AiOutlineDownload />
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
                                Persona:
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
                                Estado:
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
                        <div><h3>Editar Registro</h3></div>
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
                                value={this.state.form.id}
                            />
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
                                Estado:
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
                {/* <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination> */}
            </>


        );
    }

}


export default tabla;