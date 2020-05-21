// React, Children
import React from 'react';
import RegisterForm from './RegisterForm';

// CSS Module
import styles from './Register.module.css';



const Register = () => {

    return (
        <div className={styles.regContainer}>
            <h1>Register</h1>
            <RegisterForm/>
        </div>
    );
}


export default Register;