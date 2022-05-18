import { toast, Flip } from 'react-toastify';

const validation = (data, type)=> {

    const errors = {};

    if(type === "Log-in") {
        if(!data.name.trim()){
            errors.name = "Name is required "
        }else {
            delete errors.name
        }

        if(!data.password) {
            errors.password = "Password is required"
        } else if (data.password.length < 6) {
            errors.password = "password be at least 6 characters long"
        }else {
            delete errors.password
        }

        return errors;
    }else if (type === 'Sign-up') {
        if(!data.name.trim()){
            errors.name = "Name is required "
        }else {
            delete errors.name
        }

        if(!data.email){
            errors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email address is invalid"
        }else {
            delete errors.email
        }

        if(!data.password) {
            errors.password = "Password is required"
        } else if (data.password.length < 6) {
            errors.password = "password be at least 6 characters long"
        }else {
            delete errors.password
        }

        if(!data.confirmPass) {
            errors.confirmPass= "Confirm the password"
        }else if (data.confirmPass !== data.password){
            errors.confirmPass = "Password do not match"
        }else {
            delete errors.confirmPass
        }

        if(data.isAccepted){
            delete errors.isAccepted
        }else {
            errors.isAccepted = "Accept our regulation"
        }

        return errors;
    }



}

const notify = (type, text) =>{
    if(type === "success"){
        toast.success(text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip,
            theme:"dark",
            
        })
    }else {
        toast.error(text,{
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"dark",
            transition: Flip,
            
        })
    }
};


export {validation, notify}