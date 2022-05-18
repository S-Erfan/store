import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { validation, notify } from '../../Hooks/validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const Form = styled.form `
    margin: 120px auto;
    width: 500px;
    height: 750px;
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
    label {
        color:#6f5fd0; 
        font-weight: 900;
        padding-left: 20px;
        margin-bottom: 5px;
    }
    .container-fild {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    span {
        width: fit-content;
        background-color: #ff110051;
        font-size: .8rem;
        padding: 5px;
        border-radius: 5px;
        color: #ff0000;
        margin-top: 10px;
    }
    .tab {
        width: inherit;
        position: relative;
        height: 45px;
        input {
            width: inherit;
            height: inherit;
            border: 2px solid silver;
            outline: none;
            background: none;
            font-size: 1.3rem;
            padding: 5px 10px;
            border-radius: 15px;
        }
        svg {
            position: absolute;
            right: 10px;
            top: 20%;
            font-size: 1.5rem;
        }
    }
    .check-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        input[type=checkbox] {
            appearance: none;
            -webkit-appearance: none;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #000;
            border-radius: 5px;
            color: #3a86ff;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            ::before{
                content: "";
                width: 1rem;
                height: 1rem;
                background-color: #3a86ff;
                border-radius: 50%;
                position: absolute;
                top: .2rem;
                left: .2rem;
                transition: all .1s ease-in;
                transform: translateY(-150%);
            }
            :checked {
                padding: 5px;
                ::before {
                    transform: translateY(0);
                }
            }
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


const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        isAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const showPass = useRef(null)
    const [eyeIcon, setEyeIcon] = useState(false)

    useEffect(()=> {
        setErrors(validation(data,"Sign-up"));
    }, [data, touched])

    const changeHandler = e => {
        e.target.name === "isAccepted"
        ? setData({...data, [e.target.name]: e.target.checked})
        : setData({...data, [e.target.name]: e.target.value})
    }

    const focusHandler = (e)=> {
        setTouched({...touched, [e.target.name]: true})
    }

    const subHandler = (e)=> {
        e.preventDefault();
        if(!Object.keys(errors).length) {
            notify("success", "you log in successfuly");
            console.log("ok ok ok");
        }else {
            notify("faild", "fields Not validate");
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPass: true,
                isAccepted: true,
            })
        }
    }


    return (
        <div>
            <Form onSubmit={subHandler}>
                <h1>Sign Up</h1>
                <div className='container-fild'>
                    <label htmlFor='name'>Enter Your Name:</label>
                    <div className='tab'>
                        <FontAwesomeIcon icon={faUser} />
                        <input type='text' name='name'
                            id='name'   
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHandler}   
                        />
                    </div>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className='container-fild'>
                    <label htmlFor='email'>Enter Your Email:</label>
                    <div className='tab'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type='email' name='email'
                            id='email'
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className='container-fild'>
                    <label htmlFor='password'>Enter Your Password:</label>
                    <div className='tab'>
                        <FontAwesomeIcon icon={eyeIcon ? faEyeSlash : faEye} 
                            onClick={ ()=> {
                                showPass.current.type==="password" ? showPass.current.type = "text" : showPass.current.type = 'password';
                                setEyeIcon(prevEye => !prevEye)
                            }}
                            style={{cursor: "pointer"}}
                        />
                        <input type='password' name='password'
                            id='password'
                            value={data.password}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            ref={showPass}
                        />
                    </div>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className='container-fild'>
                    <label htmlFor='c-pass'>Confirm Your Password:</label>
                    <div className='tab'>
                        <FontAwesomeIcon icon={faLock} />
                        <input type='password' name='confirmPass'
                            id='c-pass'
                            value={data.confirmPass}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.confirmPass && touched.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div className='container-fild'>
                    <div className='check-box' >
                        <label>I accept terms of privacy policy</label> 
                        <input type='checkbox' name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className='btns'>
                    <button type='submit'>Sign Up</button>
                    <Link to='/log-in' >Log In</Link>
                </div>
            </Form>
                <ToastContainer />
        </div>
    );
};

export default SignUp;