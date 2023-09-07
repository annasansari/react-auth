import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Login from './login';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User is-->', user)
                console.log('Signed Up')
                setEmail("")
                setPassword("")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('ERROR-->', errorMessage)
            });
    }
    return (
        <>
            <div className='Myform'>
                <Form action='#'>
                    <div className='heading'>
                    <h1 >Sign Up</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => signUp()} type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        </>
    );
}

export default Signup;
