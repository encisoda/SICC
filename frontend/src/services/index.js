import axios from 'axios';

const baseUrl = 'http://localhost:4000/api'

export async function SignInService (productData){
    try{
        console.log(productData);
        const formData = new FormData()
        formData.append('email', productData.email)
        formData.append('password', productData.password)
        const response = await axios({
            url: `${baseUrl}/auth/signin`,
            method: 'POST',
            data: formData,
        })
        return response
    }catch(e){
        console.log(e)
    }
}