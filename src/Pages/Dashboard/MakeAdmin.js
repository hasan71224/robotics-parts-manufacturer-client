import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://shielded-harbor-82661.herokuapp.com/user', {
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
            <h2>Total User: {users?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
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
                        {
                            users?.map((user, index) => <AdminRow
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