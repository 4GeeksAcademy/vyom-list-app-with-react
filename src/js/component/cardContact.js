import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)


    return (
        <li className='list-group-item p-4 d-flex justify-content-between'>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
                <div className='rounded-circle' style={{ height: '150px', width: '150px', background: 'whitesmoke' }}>
                    <img className='rounded-circle  w-100 h-100' src='https://picsum.photos/id/237/200/300' style={{ objectFit: 'cover' }}></img>
                </div>
                <div className='text-secondary' style={{width: '240px'}}>
                    <h4 className='m-0'>{contact.name}</h4>
                    <p className='m-0 d-flex align-items-center gap-1'><span className='d-flex align-items-center fs-5'><i class='bx bx-current-location' ></i></span>{contact.address}</p>
                    <p className='m-0 d-flex align-items-center gap-1'><span className='d-flex align-items-center fs-4'><i class='bx bxs-phone' ></i></span>{contact.phone}</p>
                    <p className='m-0 d-flex align-items-center gap-1'><span className='d-flex align-items-center fs-5'><i class='bx bxs-envelope'></i></span> {contact.email}</p>
                </div>
            </div>
            <div className=''>
                <Link to='/EditContact'>
                    <button onClick={() => actions.setCardEditId(contact.id)} className='btn text-success fw-bold'>
                        <i className='bx bx-edit-alt text-success fs-4' ></i>
                    </button>
                </Link>
                <button onClick={() => {actions.setCardEditId(contact.id), actions.openModal()}} className='btn text-danger fw-bold'>
                    <i className='bx bxs-trash text-danger fs-4'></i>
                </button>
            </div>
        </li>
    )
}

export default CardContact