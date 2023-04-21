import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function LoginPage() {
  return <AuthForm header='Log In' text='Log In'/>;
}

export default LoginPage;

export async function action({request}){

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('http://localhost:8080/login',{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(authData)
  } );

  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw json({message: 'Could not authenticate user'},{status:500});
  }

  const respData = await response.json();
  const token = respData.token;

  localStorage.setItem('token', token);

  return redirect('/');

}