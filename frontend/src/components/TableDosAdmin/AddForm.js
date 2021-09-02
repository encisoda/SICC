import { Form } from "../Signin/SigninElements"
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const AddForm = () => {
    <Form>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Nombre"
                required
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type="textarea"
                placeholder="Apellido"
                rows={3}
            />
        </Form.Group>
        <Button variant="success" type="submit" block>
            Agregar
        </Button>

    </Form>
}

export default AddForm;