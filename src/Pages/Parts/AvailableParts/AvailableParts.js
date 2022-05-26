import React, { useEffect, useState } from 'react';
// import OrderModal from '../OrderModal/OrderModal';
import Products from '../Products/Products';
 
const AvailableParts = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold text-primary text-center py-10'>Available Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        setOrder={setOrder}
                    >
                    </Products>)
                }
            </div>
           {/* {order && <OrderModal order={order} setOrder={setOrder}> </OrderModal>} */}
        </div>
    );
};

export default AvailableParts;