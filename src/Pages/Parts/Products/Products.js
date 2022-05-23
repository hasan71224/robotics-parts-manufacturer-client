import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ product, setOrder }) => {
    const {_id, name, img, description, minimumOrder, quantity, price } = product;

    const navigate = useNavigate();
    const navigateToItemDetails = (_id) =>{
        navigate(`/parts/${_id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mx-5">
            <div className="card-body justify-center items-center">
                <h2 className="text-2xl card-title text-secondary">{name}</h2>
                <div className="w-32 rounded">
                    <img src={img} alt={name} />
                </div>
                <p> <b>Description:</b> {description}</p>
                <p> <b>Minimum Order:</b> {minimumOrder}</p>
                <p><b>{quantity} {quantity > 1 ? 'product' : 'product'} Available</b></p>
                <p><b>Price:</b> $ {price}</p>

                <div className="card-actions justify-center">
                    <label
                        // htmlFor="order-modal"
                        disabled={quantity < minimumOrder}
                        // onClick={() => setOrder(product)}
                        onClick={()=>navigateToItemDetails(_id)}
                        className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Purchase Order</label>

                </div>
            </div>
        </div>
    );
};

export default Products;