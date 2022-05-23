import React from 'react';

const OrderModal = ({order, setOrder}) => {
    const {_id, name}= order

    const handleOrder = event =>{
        event.preventDefault();
        const phone = event.target.phone.value;
        console.log(_id, name);
        setOrder(null);
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Order For {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 mt-5'>
                    
                        <input type="text" name='name' value={name} className="input input-bordered w-full max-w-xl" />
                        {/* <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xl" /> */}
                        {/* <input type="email" name='phone' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xl" /> */}
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xl" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xl" />
                        <input type="submit" value='Submit' className="input input-bordered w-full max-w-xl btn btn-accent text-white font-semi-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;