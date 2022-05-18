import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Styled from 'styled-components';
import axios from 'axios';
import { validation, notify } from '../../Hooks/validation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


 
const FormLogin = Styled.form `
    margin: 120px auto ;
    width: 500px;
    height: 550px;
    background-color: #F0A500;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: -10px 10px 14px silver;
    padding: 40px 80px;
    h1{
        color: #65d;
    }
    .input-fild {
        width: 100%;
        height: 45px;
        position: relative;
        input {
            width: 100%;
            height: 100%;
            border: 2px solid #fff;
            outline: none;
            background: none;
            font-size: 1.3rem;
            padding: 5px 10px;
            border-radius: 15px;
        }
        svg {
            position: absolute;
            top: 20%;
            right: 10px;
            color: #000;
            font-size: 1.5rem;
        }
    }
    .fild-box {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
            width: fit-content;
            background-color: #ff000088;
            font-size: .8rem;
            padding: 5px;
            border-radius: 5px;
            color: #fff;
            margin-top: 10px;
        }
    }
    
    .btns {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        button {
            padding: 15px 40px;
            background-color: #65d;
            outline: none;
            border: none;
            border-radius: 25px;
            color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all .4s linear;
            :hover{
                background-color: #3a86ff;
            }
        }
        a {
            color: #65d;
            text-decoration: none;
            font-size: 1.2rem;
        }
    }
    @media (max-width: 550px) {
        width: 90vw;
        padding: 20px 40px;
    }
`;


const LogIn = (props)=> {

    const [data, setData] = useState({
        name: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const showPass = useRef(null)
    const [eyeIcon, setEyeIcon] = useState(false)

    useEffect(()=> {
        setErrors(validation(data, "Log-in"))
    }, [data, touched])
    

    const changeHandler = (event)=> {
        setData({...data, [event.target.name]: event.target.value});
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const subHandler = (e)=> {
        e.preventDefault();
        if(!Object.keys(errors).length) {
            console.log("ok ok ok");
            notify("success", "you log in successfuly");
        }else {
            notify("faild", "fields Not validate");
            setTouched({
                name: true,
                password: true,
            })
        }
    }
    return (
        <FormLogin onSubmit={subHandler}>
            <h1>Log-in</h1>
            <div className='fild-box'>
                <div className='input-fild'>
                    <FontAwesomeIcon icon={faUser} />
                    <input 
                        type='text' 
                        placeholder='enter your username' 
                        name='name' 
                        onChange={changeHandler} 
                        value={data.name}
                        onFocus={focusHandler}
                    />
                </div>
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div className='fild-box'>
                <div className='input-fild'>
                    <FontAwesomeIcon icon={eyeIcon ? faEyeSlash : faEye} style={{cursor: "pointer"}}
                        onClick={()=> {
                            showPass.current.type==="password" ? showPass.current.type = "text" : showPass.current.type = 'password';
                            setEyeIcon(prevEye => !prevEye)
                        }}
                    />
                    <input 
                        type='password' 
                        placeholder='enter your password' 
                        name='password' 
                        onChange={changeHandler} 
                        value={data.password}
                        onFocus={focusHandler}
                        ref={showPass}
                    />
                </div>
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className='btns'>
                <button type='submit'>Log In</button>
                <Link to='/sign-up'>Sign Up</Link>
            </div>
            <ToastContainer />
        </FormLogin>
    );
}

export default LogIn;