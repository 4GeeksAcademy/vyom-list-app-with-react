import React from 'react'
import { Link } from 'react-router-dom'
import CardContact from '../component/cardContact'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const ListContacts = () => {
    const {store, actions} = useContext(Context)
	// console.log(store.agendaList)
    
    return (
        <div className='w-75 mx-auto'>
            
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