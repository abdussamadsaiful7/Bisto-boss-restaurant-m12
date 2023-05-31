import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import useAuth from './UseAuth';

const UseAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    })

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })

        axiosSecure.interceptors.response.use(
            (response)=> response,
            async(error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await logOut();
                }
                return Promise.reject(error);
            }
        );

    },[logOut, navigate, axiosSecure])
    return [axiosSecure];
};

export default UseAxiosSecure;