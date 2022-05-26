import React, { useState } from 'react';
import auth from "../../firebase.init"
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [user] = useAuthState(auth)

    const handleForm = () => {
    }

    const handleAddress = () => {
        console.log(phone);
        
        console.log(address);
    }

    return (
        <div>
            <h2>My Profile</h2>


            <div className='flex h-screen justify-center items-center'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-8 ">
                    <div className="card-body">
                        <div className='card justify-center items-center'>
                            {/* <h2 className="text-2xl card-title text-secondary mb-2">{parts.name}</h2> */}
                            <div className="w-32 rounded">
                                {/* <img src={parts.img} alt={parts.name} /> */}
                            </div>
                        </div>
                        <div>
                            {/* <p> <b>Description:</b> {parts.description}</p>
                        <p> <b>Minimum Order Products:</b> {parts.minimumOrder}</p>*/}

                            <p> <b> Name: </b> <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mt-1" /></p>
                            <p> <b>Email: </b> <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs mt-1" /> </p>
                            <p> <b> Address: </b> <input type="text" name='address' disabled value={address || ''} className="input input-bordered w-full max-w-xs mt-1" /></p>
                            <p> <b> Phone: </b> <input type="text" name='phone' disabled value={phone || ''} className="input input-bordered w-full max-w-xs mt-1" /></p>
                            
                            
                            <form onSubmit={handleForm} className='mt-20'>
                                <p> <b>Address:</b> <input type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" /></p>
                                <b>Phone:</b> <input type="text" name='phone' placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className="input input-bordered w-full max-w-xs mt-1" />

                                <div className="card-actions justify-center mt-4">
                                    <label
                                        className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary" onClick={handleAddress}>Confirm Order
                                    </label>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;