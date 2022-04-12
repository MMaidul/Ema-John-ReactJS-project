import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = e => {
        const nameInput = e.target.value;
        setName(nameInput)
    }
    const handleEmailBlur = e => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }
    const handleAddressBlur = e => {
        const addressInput = e.target.value;
        setAddress(addressInput)
    }
    const handleNumberBlur = e => {
        const numberInput = e.target.value;
        setNumber(numberInput)
    }
    const handleCreateUser = e => {
        e.preventDefault();
        const shipping = { name, address, number }
        console.log(shipping);
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} type="email" name="email" id="" readOnly />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="number">Phone Number</label>
                            <input onBlur={handleNumberBlur} type="text" name="number" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;