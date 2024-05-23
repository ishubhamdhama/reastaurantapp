import React from 'react';
import './css/ErrorPage.css';
import { Link } from 'react-router-dom';
import Notfound from '../images/menu/vecteezy_3d-fast-food-icon-set-design-for-fast-food-delivery_41641653.png';
function ErrorPage() {
    return (
        <>
            <div className="bg-black flex h-[100vh] justify-center items-center">
                <img src={Notfound} alt="" className="h-[50vh] w-full object-contain" loading='lazy' />
                <div className="text-center w-full mr-28 leading-loose">
                    <h2 className="text-[7rem] font-bold text-[#ffffff]" style={{ fontFamily: "'Briem Hand',cursive" }}>404</h2>
                    <p className='text-white text-2xl leading-loose'>Page Not Found!<br /> Please Go to Home Page</p>
                        <Link to="/"
                            className="text-2xl leading-loose font-bold px-4 py-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                            Go Home
                        </Link>
                    
                </div>
            </div>
        </>
    )
}

export default ErrorPage