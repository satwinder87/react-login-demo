import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function SignupPage() {
  return <AuthForm header='Create Account' text='Save'/>;
}

export default SignupPage;

export async function action({request}){

  console.log((request));

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const response = await fetch('http://localhost:8080/signup',{
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

  return redirect('/');

}