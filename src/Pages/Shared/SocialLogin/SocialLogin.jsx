import React from 'react';
import google from '../../../assets/icon/google.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            navigate(from, { replace: true });
                    })
            })

    }


    return (
        <div className='text-center pb-4'>
            <div className="divider">Or sign in with</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <img src={google} alt="" />
            </button>
        </div>
    );

}



export default SocialLogin;