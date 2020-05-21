// React, Hooks
import React, {useState, useCallback} from 'react';
// CSS Module
import styles from './Login.module.css';
//  Installed Node Modules
// Redux, Router Hooks
import { useHistory, Link } from "react-router-dom";

import cx from 'classnames';

// Helpers
import { errorCount, validateEmail, emailErrors, allErrors } from "./Helpers";



const LoginForm = () => {

    const history = useHistory();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email,password} = formData;
    

    const handleChange = useCallback((e) => {
        e.preventDefault();
        if(e.target.name === 'email') validateEmail(e.target.value);
        setFormData({...formData,[e.target.name]:e.target.value})
    },[formData]);

    const submitLogin = useCallback(async (e) => {
        e.preventDefault();
        if(errorCount() <1){
            history.push('/dashboard');
        }

        
    },[history]);

    
    return (
        <form  onSubmit={submitLogin}>
            
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
                <label htmlFor="password" className={styles.label}>Password</label>
            </div>
            
            <button className={styles.button} type="submit">Login</button>
            <div className={styles.RegisterLinkContainer}>
                <div>No Account? &nbsp;</div>
                <Link to="/register" className={styles.registerLink}>Register</Link>
            </div>
                 
        </form>
    );
}

export default LoginForm;