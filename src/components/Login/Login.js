import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

 

const Login = () => {
    
    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;