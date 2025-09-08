import { useNavigate } from "react-router-dom";
import { SignupForm } from "../features/authentication";
import { useState } from "react";
export default function SignUp(){
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const authSignup = async (data) => {
        let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/auth/register';
        if (process.env.NODE_ENV === 'development'){
            url = 'http://localhost:5001/auth/register'
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            // if (!response.ok){
            //     throw new Error('fail to fetch');
            // }
            const json = await response.json();
            setStatus(json.status);
            if (json.status === 'ok'){
                alert('new account created');
                navigate('/dashboard');
            }
        } catch (error) {
            console.log('fail to signup');
        }
    }
    return (
        <SignupForm authSignup={authSignup} status={status}/>
    )
}