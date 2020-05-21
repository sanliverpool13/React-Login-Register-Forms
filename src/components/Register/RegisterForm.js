// React, Hooks
import React, { useState, useCallback } from 'react';

// CSS Module
import styles from "./Register.module.css";

//Router and Redux Hooks
import { Link, useHistory } from "react-router-dom";


import cx from 'classnames';


// Helpers
import {   validatePassword, passwordLabel, passwordBarClasses,
    confirmPasswordValidation, confirmedPassword, confirmPasswordLabel,
    confirmedPasswordInputClass,confirmedPasswordLabelClass, validateEmail, emailErrors,
    nameErrors, validateName, errorCount,allErrors } from "./Helpers";



const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

    const history = useHistory();
    

    const {name,email,password,confirmPassword} = formData;


    const handleChange = useCallback((e) => {
        e.preventDefault();
        if(e.target.name === 'password') validatePassword(e.target.value);
        if(e.target.name === 'confirmPassword') confirmPasswordValidation(password,e.target.value);
        if(e.target.name === 'email') validateEmail(e.target.value);
        if(e.target.name === 'name') validateName(e.target.value);

        setFormData({...formData,[e.target.name]:e.target.value})
    },[formData,password]);

    console.log(allErrors);
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        //validate password one last time
        console.log(allErrors);
        if(errorCount() <1){
            history.push('/dashboard');
        }
        
        
    },[history]);

    
    return (
        <form  onSubmit={handleSubmit}>

            <div className={styles.field}>
                <input type="text" name="name" className={styles.input} placeholder=" " 
                value={name} onChange={handleChange} autoComplete="off"/>
                <label htmlFor="name" className={cx(styles.label,nameErrors.nameLabelClass)}>{nameErrors.nameLabel}</label>
            </div>

            <div className={styles.field}>
                <input type="email" name="email" className={styles.input} placeholder=" " 
                value={email} onChange={handleChange} autoComplete="off"/>
                <label htmlFor="email" className={cx(styles.label,emailErrors.class)}>
                    {emailErrors.label}
                </label>
            </div>

            <div className={styles.field}>
                <input type="password" name="password" className={styles.input} placeholder=" " 
                value={password} onChange={handleChange}/>
                <label htmlFor="password" className={styles.label}>
                    {passwordLabel}
                </label>
            </div>

            <div className={styles.field}>
                <input type="password" name="confirmPassword" className={confirmedPasswordInputClass(confirmedPassword)} 
                    placeholder=" " value={confirmPassword} onChange={handleChange}/>
                <label htmlFor="confirmPassword" className={confirmedPasswordLabelClass(confirmedPassword)}>
                    {confirmPasswordLabel}
                </label>
            </div>

            <div className={styles.strength}>
                <span className={passwordBarClasses(1)}></span>
                <span className={passwordBarClasses(2)}></span>
                <span className={passwordBarClasses(3)}></span>
                <span className={passwordBarClasses(4)}></span>
            </div>

            <ul>
                <li> must be at least 10 characters long</li>
                <li> must contain a capital letter</li>
                <li> must contain a number</li>
                <li> must contain one of $&+,:=@#</li>
            </ul>
            
            <button className={styles.button} type="submit">Register</button>
            <div className={styles.loginLinkContainer}>
                <div>Already Have An Account? &nbsp;</div>
                <Link to="/login" className={styles.loginLink}>Login</Link>
            </div>
        </form>
    );
}



export default RegisterForm;