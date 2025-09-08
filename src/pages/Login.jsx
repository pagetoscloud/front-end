import { useNavigate } from "react-router-dom";
import { LoginForm } from "../features/authentication";
import { useState } from "react";
export default function Login(){
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const authenticationProcess = async (data) => {
        console.log(data);
        let url = 'https://dummy-backend-500141028909.asia-southeast2.run.app/auth/login';
        if (process.env.NODE_ENV === 'development'){
            url = 'http://localhost:5001/auth/login'
        }
        console.log(url);
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
            console.log(json);
            if (json.status === 'ok'){
                console.log(json.data);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <LoginForm authenticationProcess={authenticationProcess} status={status}/>
}