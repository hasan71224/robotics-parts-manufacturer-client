import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
         .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <h2>Total User: : {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <AdminRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            >
                            </AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;