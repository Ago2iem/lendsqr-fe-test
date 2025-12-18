import { useState } from 'react';
import './Input.scss'

interface InputProps {
    type: string;
    name: string;
    id: string;
    placeholder?: string;
    search?: boolean
}

const Input = ({ type, name, id, placeholder, search = false }: InputProps) => {
    const [show, setShow] = useState<boolean>(true)


    return (
        <div className={`input-container input-container--${search ? 'search' : ''}`}>
            <input className='input' type={show ? type : 'text'} name={name} id={id} placeholder={placeholder} />
            {type === 'password' && <span className='show-btn' onClick={() => setShow(!show)}>{show ? 'SHOW' : 'HIDE'}</span>}

        </div>
    )
}

export default Input
