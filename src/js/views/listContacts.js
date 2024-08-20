import React from 'react'
import { Link } from 'react-router-dom'
import CardContact from '../component/cardContact'
import { useContext } from 'react'
import { Context } from '../store/appContext'

import '../../styles/listContacts.css'


const ListContacts = () => {
    const {store, actions} = useContext(Context)
	// console.log(store.agendaList)
    
    return (
        <div className='w-75 mx-auto position-relative'>
            {/* MODAL */}
            <div className={store.modalValue ? 'modal-confirm' : 'modal-confirm modal-off'}>
                <h1 className='w-75 text-center'>Estas seguro que quieres eliminar este contacto<span style={{color: '#f94f34'}}>?</span></h1>
                <div>
                    <button className='btn fs-3 fw-bold' style={{color: '#f94f34'}} onClick={() => actions.closeModal()}>No</button>
                    <button className='btn fs-3 fw-bold' style={{color: '#00ff42'}} onClick={() => {actions.contactDelete(store.cardSelectEdit), actions.closeModal()}}>Si</button>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <Link to="/ContactForm">
                    <button className='btn btn-success'>Nuevo Contacto</button>
                </Link>
            </div>
            <ul className='list-group mt-3'>
                {store.agendaList.map((contact, index) => <CardContact contact={contact} key={contact.id} />)}
            </ul>
        </div>
    )
}

export default ListContacts