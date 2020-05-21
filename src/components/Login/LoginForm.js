// React, Hooks
import React, {useState, useCallback} from 'react';
// CSS Module
import styles from './Login.module.css';
//  Installed Node Modules
// Redux, Router Hooks
import { useHistory, Link } from "react-router-dom";


// Helpers
import { validate } from "./Helpers";


const LoginForm = () => {

    const history = useHistory();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email,password} = formData;
    

    const handleChange = useCallback((e) => {
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value})
    },[formData]);

    const submitLogin = useCallback(async (e) => {
        e.preventDefault();

        

        
    },[]);

    
    return (
        <form  onSubmit={submitLogin}>
            
            <div className={styles.field}>
                <input type="email" name="email" className={styles.input} placeholder=" " 
                value={email} onChange={handleChange} autoComplete="off"/>
                <label htmlFor="email" className={styles.label}>Email</label>
            </div>

            <div className={styles.field}>
                <input type="password" name="password" className={styles.input} placeholder=" " value={password} onChange={handleChange}/>
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