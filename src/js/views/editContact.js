import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const EditContact = () => {
    const {store, actions} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { fullName, email, numberPhone, address } = e.target;
        
        const newDates = {
            name: fullName.value,
            numberPhone: numberPhone.value,
            email: email.value,
            address: address.value
        };
                
        actions.contactEdit(store.cardSelectEdit, newDates);
        
        fullName.value = ''
        email.value = ''
        numberPhone.value = ''
        address.value = ''
        console.log(store.cardSelectEdit);
    }; 


    
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center'>Editar Contacto</h1>
            <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                <div className='d-flex flex-column gap-2' >
                    <label>Nombre completo</label>
                    <input placeholder='Nombre Completo...' required id='fullName' autoComplete='off'></input>
                </div>
                <div className='d-flex flex-column gap-2' >
                    <label>Email</label>
                    <input placeholder='Email...' id='email' required autoComplete='off'></input>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <label>Numero de celular</label>
                    <input placeholder='Numero de celular...' required id='numberPhone' autoComplete='off'></input>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <label>Direccion</label>
                    <input placeholder='Direccion...' id='address' required autoComplete='off'></input>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary fw-bold'>Actualizar datos</button>
                </div>
            </form>
            <Link to="/">
                <span>Volver a agenda</span>
            </Link>
        </div>
    )
}

export default EditContact