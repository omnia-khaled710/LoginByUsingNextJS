import cx from 'classnames';
import '@fontsource/roboto/400.css';
import styles from '../styles/Signin.module.css'
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import React, {SyntheticEvent, useState} from 'react';
import Layout from "../layouts/Layout";
import {useRouter} from "next/router";

const Register = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                address
            })
        });

        await router.push('/login');
    }

  return (
    <Layout>
    <Paper sx={{background:"#8A24C4" ,width:"500px" ,margin:"auto"}}>

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-bold text-white">Please Register</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="name-input" placeholder="enter your name" style={{marginTop: '10px'}} 
             onChange={e => setName(e.target.value)} />
           
            <label htmlFor="name-input">Full Name</label>
          </div>

          <div className="form-floating">
            <input type="email" className="form-control" id="email-input" placeholder="name@example.com" style={{marginTop: '10px'}}
              onChange={e => setEmail(e.target.value)} />
           
            <label htmlFor="email-input">Email address</label>
          </div>

          <div className="form-floating">
            <input type="text" className="form-control" id="phone-input" placeholder="01652438763" style={{marginTop: '10px'}}
              onChange={e => setPhone(e.target.value)} />
           
            <label htmlFor="phone-input">Phone Number</label>
          </div>

          <div className="form-floating">
            <input type="textarea" className="form-control" id="address-input" placeholder="enter your address" style={{marginTop: '10px'}}
              onChange={e => setAddress(e.target.value)} />
           
            <label htmlFor="address-input">Address</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="password-input" placeholder="Password" style={{marginTop: '10px'}}
              onChange={e => setPassword(e.target.value)} />
            <label htmlFor="password-input">Password</label>
          </div>

          <Button variant="contained"  type='submit' color="info" sx={{
              background:"#EB439B" }}>Sign UP</Button>

        </form>
      </main>
      </Paper>
    
    </Layout>
  )
}

export default Register;
