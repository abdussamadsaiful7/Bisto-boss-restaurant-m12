import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin =(user)=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH',

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch();
            toast.success(`${user.name}`,'is an admin successfully!')
        }
    })
    }

    const handleDeleteUser = (user) => {
        console.log(user);
    }

    return (
        <div className='w-3/4'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className="text-2xl font-extrabold">TOTAL USERS: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' :
                                            <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-yellow-500 text-white hover:text-red-500"><span ><FaUserShield /></span>
                                            </button>

                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs bg-red-500 text-white hover:text-red-500"><span ><FaTrashAlt /></span></button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;