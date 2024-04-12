import React, { useState } from 'react';
import Form from '../molecules/Form';
import Button from '../atoms/Button';
import TextField from '../atoms/TextField';
import useUserContext from '../../hooks/useUserContext';

/* 
We have here a simple Login form component as we did before on our javascript app

*/
const LoginForm: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUserContext();

    const handleLogin = () => {
        const user = {
            name: name,
            surname: surname,
            email: email,
            gender: gender,
            password: password
        };

        if(!user.name || !user.surname || !user.email || !user.gender || !user.password){
            return alert('All fields required!');
            setUser(user);
        }
        
        setUser(user);
    };

    return (
        <Form>
            <div className='login-form'>
                <div>
                    <TextField
                        value={name} 
                        onChange={setName} 
                        title="Name" 
                        placeholder="Enter your name" 
                    />
                    <TextField 
                        value={surname} 
                        onChange={setSurname} 
                        title="Last Name" 
                        placeholder="Enter your surname" 
                    />
                    <TextField 
                        value={email} 
                        onChange={setEmail} 
                        title="Email" 
                        placeholder="Enter your email" 
                    />
                    <TextField 
                        value={gender} 
                        onChange={setGender} 
                        title="Gender" 
                        placeholder="Enter your gender" 
                    />
                    <TextField 
                        value={password} 
                        onChange={setPassword} 
                        title="Password" 
                        placeholder="Enter your password" 
                    />
                </div>
            </div>
            <Button onClick={handleLogin} text="Login" />
        </Form>
    );
};

export default LoginForm;