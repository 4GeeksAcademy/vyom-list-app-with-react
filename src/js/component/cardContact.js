import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)


    return (
        <li className='list-group-item p-4 d-flex justify-content-between'>
            <div className='d-flex gap-4'>
                <div className='rounded-circle' style={{ height: '150px', width: '150px', background: 'whitesmoke' }}>
                    <img className='rounded-circle  w-100 h-100' src='https://picsum.photos/id/237/200/300' style={{ objectFit: 'cover' }}></img>
                </div>
                <div className='text-secondary'>
                    <h4 className='m-0'>{contact.name}</h4>
                    <p className='m-0'>{contact.address}</p>
                    <p className='m-0'>{contact.phone}</p>
                    <p className='m-0'>{contact.email}</p>
                </div>
            </div>
            <div className=''>
                <Link to='/EditContact'>
                    <button onClick={() => actions.setCardEditId(contact.id)} className='btn text-success fw-bold'>
                        <i class='bx bx-edit-alt text-success fs-4' ></i>
                    </button>
                </Link>
                <button onClick={() => actions.contactDelete(contact.id)} className='btn text-danger fw-bold'>
                    <i class='bx bxs-trash text-danger fs-4'></i>
                </button>
            </div>
        </li>
    )
}

export default CardContact