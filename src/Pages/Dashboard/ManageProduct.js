import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Product</h2>

            <div>
                <h2>Manageable product: {products.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                {/* <th>Description</th> */}
                                <th>Quantity</th>
                                <th>Minimum Order</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <ProductRow
                                    key={product._id}
                                    product={product}
                                    index={index}
                                    refetch={refetch}
                                    setDeletingProduct={setDeletingProduct}
                                ></ProductRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {deletingProduct && <DeleteConfirmModal
                    deletingProduct={deletingProduct}
                    setDeletingProduct={setDeletingProduct}
                ></DeleteConfirmModal>}
            </div>
        </div>
    );
};

export default ManageProduct;