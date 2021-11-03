import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text, Img } from './SigninElements';
import logo from '../../images/logo.png';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
const SignIn = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    //const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2IzNTkwMDkxYWI4MmY0MDMxM2JmZCIsImlhdCI6MTYzNTQ2NDU5MiwiZXhwIjoxNjM1NTUwOTkyfQ.lYxfdFgKYBKn0YZmw8Q2lvEkKom9hDh3U-bk2d_oec0");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-ifno')){
            history.push("/add")
        }
    }, [])
    async function singin()
    {
        console.warn(email, password);
        let item={email,password};
        console.log(item);
        let result= await fetch("http://localhost:4000/api/auth/signin", {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        //history.push("/add")

    }

    return (


        <div>
          
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="email" 
            onChange={(e)=>setEmail(e.target.value)}
             className="form-control"/>
            
            <input type="password" placeholder="password" 
            onChange={(e)=>setPassword(e.target.value)}
             className="form-control"/>

            
          

             <button onClick={singin} className="btn btn-primary"> Login </button>

            </div>
        </div>


        // <>
        //     <Container>
        //         <FromWrap>
        //             <Icon to="/">SICC</Icon>
        //             <FormContent>
        //                 <Form>
        //                     <Img src={logo} />
        //                     <FormH1>Iniciar Sesion</FormH1>
        //                     <FormLabel htmlFor='for'>Email</FormLabel>
        //                     <FormInput type='email' required />
        //                     <FormLabel htmlFor='for'>Contraseña</FormLabel>
        //                     <FormInput type='password' required />
        //                     <FormButton type='submit'>Ingresar</FormButton>
        //                     <Text>Olvide la contraseña</Text>
        //                 </Form>
        //             </FormContent>
        //         </FromWrap>
        //     </Container>
        // </>
    )
}

export default SignIn;
