import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FromWrap>
                    <Icon to="/">Sicc</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Iniciar Sesion</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FromWrap>
            </Container>
        </>
    )
}

export default SignIn;
