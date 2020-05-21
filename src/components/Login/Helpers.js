import validator from 'validator';

export const validate = (email,password) => {
    const tempErrors = {};

    if(!validator.isEmail(email)) {
        tempErrors['email'] = 'Invalid Email!';
    }
    if(!validator.isLength(password,{min:10})) {
        tempErrors['password'] = 'Password must be at least of length 10!';
    }
        
    return tempErrors;
}