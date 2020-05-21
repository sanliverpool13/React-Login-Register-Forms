import validator from 'validator';
import styles from './Register.module.css';



import cxBind from 'classnames/bind';
const cx = cxBind.bind(styles);

export const allErrors = [true,true,true,true];
export const errorCount = () => allErrors.reduce((acc,curr) => acc+curr);

/*
*   Name Validation, only on Submit
*/

export const nameErrors = {nameLabel: 'Name',nameLabelClass: ''};
export const validateName = (name) => {
    if(!validator.isLength(name,{min:1})){
        nameErrors.nameLabelClass = styles.nameLabelError;
        nameErrors.nameLabel = "Enter Name!";
        allErrors[0] = true;
    }else{
        allErrors[0] = false;
    }
    
    
}

/*
*   Email validation, every input change
*/

export const emailErrors = {label:'Email',class:''};

export const validateEmail = (email) => {
    if(!validator.isEmail(email) && email.length !== 0) {
        emailErrors.label = "Invalid Email";
        emailErrors.class = styles.emailLabelError;
        allErrors[1] = true;
    }else{
        emailErrors.label = "Email";
        emailErrors.class = '';
        allErrors[1] = false;
    }
    
}

/*
*   Password validation, on every input
*/

let passwordStrength = 0;
let passwordValidations = [];
export let passwordLabel = 'Password';
export let barsShown = {1:false,2:false,3:false,4:false};

export const passwordBarClasses = (barNumber) => {
    
    const arrayOfClasses = ['bar', `bar${barNumber}`,{'barShow':barsShown[barNumber]}];
    return cx(arrayOfClasses);
}


export const validatePassword = (password) => {

    

    passwordValidations = [
        (password.length > 9),
        (password.search(/[A-Z]/) > -1),
        (password.search(/[0-9]/) > -1),
        (password.search(/[$&+,:=@#]/) > -1),
    ];

    passwordStrength = passwordValidations.reduce((acc,curr) => acc + curr);
    


    switch(passwordStrength){
        case 0:
            passwordLabel = "Password Very Weak";
            barsShown = {1:false,2:false,3:false,4:false};
            allErrors[2] = true;
            break;
        case 1:
            passwordLabel = "Password Weak";
            barsShown = {1:true,2:false,3:false,4:false};
            allErrors[2] = true;
            break;
        case 2:
            passwordLabel = "Password So-so";
            barsShown = {1:true,2:true,3:false,4:false};
            allErrors[2] = true;
            break;
        case 3:
            passwordLabel = "Password Good";
            barsShown = {1:true,2:true,3:true,4:false};
            allErrors[2] = true;
            break;
        case 4:
            passwordLabel = "Password Very Good!";
            barsShown = {1:true,2:true,3:true,4:true};
            allErrors[2] = false;
            break;
        default:
            throw new Error("Invalid Password Strength")
    }
}



/*
*   Confirm Password validation, on every input change
*/

export let confirmedPassword = true;//since at first confirm password field is empty
export const confirmedPasswordInputClass = (confirmedPassword)  => {
    return cx('input',{'errorConfirmPassword':!confirmedPassword});
};
export const confirmedPasswordLabelClass = (confirmedPassword) => {
    return cx('label',{'confirmPassLabelError':!confirmedPassword})
}


export let confirmPasswordLabel = "Confirm Password";

export const confirmPasswordValidation = (password, confirmPassword) => {
    
    if(password !== confirmPassword && confirmPassword !== "") {
        confirmedPassword = false;
        confirmPasswordLabel = "Passwords Must Match!";
        allErrors[3] = true;
    }
    else{ 
        confirmedPassword = true;
        confirmPasswordLabel = "Password";
        allErrors[3] = false;
    }
    
}



