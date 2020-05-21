import validator from 'validator';
import styles from './Login.module.css';

// import cxBind from 'classnames/bind';
// const cx = cxBind.bind(styles);

export const allErrors = [true];
export const errorCount = () => allErrors.reduce((acc,curr) =>  acc+curr);

export const emailErrors = {label:'Email',class:''};

export const validateEmail = (email) => {
    if(!validator.isEmail(email) && email.length !== 0) {
        emailErrors.label = "Invalid Email";
        emailErrors.class = styles.emailLabelError;
        allErrors.email = true;
    }else{
        emailErrors.label = "Email";
        emailErrors.class = '';
        allErrors.email = false;
    }
    
}