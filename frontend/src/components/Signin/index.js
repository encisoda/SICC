import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text, Img } from './SigninElements';
import logo from '../../images/logo.png';
const SignIn = () => {
    return (
        <>
            <Container>
                <FromWrap>
                    <Icon to="/">SICC</Icon>
                    <FormContent>
                        <Form>
                            <Img src={logo} />
                            <FormH1>Iniciar Sesion</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Contraseña</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Ingresar</FormButton>
                            <Text>Olvide la contraseña</Text>
                        </Form>
                    </FormContent>
                </FromWrap>
            </Container>
        </>
    )
}

export default SignIn;
