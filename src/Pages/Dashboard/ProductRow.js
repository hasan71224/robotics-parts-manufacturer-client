import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const {id, name, description, img, quantity, minimumOrder, price } = product;

    const handleDelete = name =>{
        fetch(`http://localhost:5000/product/${name}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data){
                toast(`${name} is deleted.`)
                setDeletingProduct(null)
                refetch();
            }
        })
    }
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            {/* <td>{description}</td> */}
            <td>{quantity}</td>
            <td>{minimumOrder}</td>
            <td>{price}</td>
            <td> <button onClick={()=> handleDelete(name)} class="btn btn-xs btn-error">Delete</button> </td>
            {/* <td>
                <label onClick={()=> setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                
            </td> */}
        </tr>
    );
};

export default ProductRow;