import { useNavigate } from "react-router-dom";
import { LoginForm } from "../features/authentication";
import { useState } from "react";
export default function Login(){
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const authenticationProcess = async (data) => {
        // let url = 'https://pagetos-express-backend-v1-561278679973.asia-southeast2.run.app/auth/login';
        // if (process.env.NODE_ENV === 'development'){
        //     url = 'http://localhost:5001/auth/login'
        // }

        const url = process.env.NODE_ENV !== 'development' 
            ? `${process.env.API_URL}/auth/login}` 
            : 'http://localhost:5001/auth/login';

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
            if (!response.ok){
                console.log('error')
            }
            const json = await response.json();
            setStatus(json.status);
            if (json.status === 'ok'){
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <LoginForm authenticationProcess={authenticationProcess} status={status}/>
}