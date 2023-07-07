import style from './Form.module.css'
import { useState } from 'react';
import Validation from "../Validation";

const Forms = ({login})=>{
    const [userData, setUserData] = useState({
        email: '',
        password:'',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event)=>{
        setErrors(Validation({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value,})
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    };

    return(
    <div >
        <form className={style.contenedor}>
            <label className={style.email} htmlFor="email">Email: </label>
            <input className={style.ingresar} onChange={handleChange} value={userData.email} type="text" name="email"/>
            {errors.e1 ? (
            <p>{errors.e1}</p>)
            : errors.e2 ? (
            <p>{errors.e2}</p>)
            :(<p>{errors.e3}</p>)            
            }
            <hr/>

            <label className={style.password} htmlFor="password">Password: </label>
            <input className={style.ingresar} onChange={handleChange} value={userData.password} type="password" name="password"/>
            {errors.p1 ? (<p>{errors.p1}</p>) : errors.p2}                      
            
        </form>
        <button onClick={handleSubmit} className={style.submit} type="submit" >Submit</button> 
    </div>
)};


export default Forms;