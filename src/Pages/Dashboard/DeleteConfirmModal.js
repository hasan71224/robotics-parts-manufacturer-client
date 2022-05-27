import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingOrder, setDeletingOrder}) => {
    const {_id, name, customer} = deletingOrder;
    console.log(_id);
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeletingOrder(null)
                    window.location.reload(false);
                    toast.success(`${customer} Order is deleted.`);
                }
            })
    }



    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                    <label for="delete-confirm-modal" className="btn btn-xs">Cancel!</label>
                </div>
            </div>
        </div>
    </div >
    );
};

export default DeleteConfirmModal;