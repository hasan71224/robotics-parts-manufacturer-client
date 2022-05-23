import React, { useEffect, useState } from 'react';
// import OrderModal from '../../Parts/OrderModal/OrderModal';
import Products from '../../Parts/Products/Products';

const PartsSection = () => {
    const [products, setProducts] = useState([])
    // const [order, setOrder] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-20'>Available Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    products.slice(0,3).map(product => <Products
                        key={product._id}
                        product={product}
                        // setOrder={setOrder}
                    >
                    </Products>)
                }
            </div>
           {/* {order && <OrderModal order={order} setOrder={setOrder}> </OrderModal>} */}
        </div>
    );
};

export default PartsSection;