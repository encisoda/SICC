import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FromWrap, Icon, Text, Img } from './SigninElements';
import logo from '../../images/logo.png';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';

// Contextos.
import { TokenContext } from '../../context/TokenContext';
//const SignIn = () => {
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
    // //const [token] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2IzNTkwMDkxYWI4MmY0MDMxM2JmZCIsImlhdCI6MTYzNTQ2NDU5MiwiZXhwIjoxNjM1NTUwOTkyfQ.lYxfdFgKYBKn0YZmw8Q2lvEkKom9hDh3U-bk2d_oec0");
    // const history = useHistory();
    // useEffect(() => {
    //     if(localStorage.getItem('user-ifno')){
    //         history.push("/add")
    //     }
    // }, [])
    // async function singin()
    // {
    //     console.warn(email, password);
    //     let item={email,password};
    //     let result= await fetch("http://localhost:4000/api/auth/signin", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type":"application/json",
    //         },
    //         body:JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem("user-info", JSON.stringify(result))
    //     history.push("/add")

    // }



    // formulario inicial.
const frmInicialLogin = {
    email: '',
    password: '',
  };
  

  const URLLogin = "http://localhost:4000/api/auth/signin";
  console.log(URLLogin);

  const SignIn = () => {


  const {token, setToken} = "useContext(TokenContext)";

  const [form, setForm] = useState(frmInicialLogin);

  const { email, password } = form;

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handlerSubmit = (e) => {

    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Datos incompletos");
      return;
    }

    realizarPeticion(form);
    setForm(frmInicialLogin);
  }

  const realizarPeticion = (form) => {

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json;charset=utf-8" },
      mode: 'no-cors',
      body: JSON.stringify(form)
    }

    const recogerToken = async () => {

        try {
          const res = await fetch(URLLogin, options);
         
          const nuevaRespuesta = await res.json();
  
          if (typeof nuevaRespuesta.token === 'undefined')
          {
            alert("No existe tal usuario.");
          }
          else
          {
            console.log(email, password);
            localStorage.setItem("token", nuevaRespuesta.token);
            setToken(nuevaRespuesta.token);
            alert("Usuario encontrado. Logueado con exito. Se ha generado un token :)");
          }
  
        } catch (error) {
  
          console.log("error");
  
        }
  
      }
  
      recogerToken();
    }
  
  

    return (

        <div className="contenedor-form">

        <form onSubmit={handlerSubmit}>
  
  
          <div className="wrapper">
            <div className="row">
              <h1> LOGIN </h1>
              <div className="form-control">
                <input name="email" placeholder="Ingrese su email" onChange={handlerChange} value={email} />
                <span className="toggle">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="form-control">
                <input name="password" type="password" placeholder="Ingrese su contraseña" onChange={handlerChange} value={password} />
  
              </div>
              <input type="submit" value={"Ingresar"} onClick={handlerSubmit} />         
              </div>
          </div>
  
        </form>
  
      </div>

        // <div>
          
        //     <div className="col-sm-6 offset-sm-3">
        //     <input type="text" placeholder="email" 
        //     onChange={(e)=>setEmail(e.target.value)}
        //      className="form-control"/>
            
        //     <input type="password" placeholder="password" 
        //     onChange={(e)=>setPassword(e.target.value)}
        //      className="form-control"/>

            
          

        //      <button onClick={singin} className="btn btn-primary"> Login </button>

        //     </div>
        // </div>


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
    );
}

export default SignIn;
