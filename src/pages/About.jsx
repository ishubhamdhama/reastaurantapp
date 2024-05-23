import React, { useEffect, useState } from 'react';
import Image1 from '../images/pageImages/jon-tyson-ZA9PHAnVP5g-unsplash_2_11zon.jpg';
import About1 from '../images/About1.jpg';
import About2 from '../images/About2.jpg'
import Restaurant from '../images/icons/restaurant.png';
import Dinner from '../images/icons/dinner.png';
import Interior from '../images/icons/dinning-table.png';
import Customer from '../images/icons/customer.png';
import './css/About.css';

function About() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = Image1;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (
        <>
            <div className="relative">
                {imageLoaded && (
                    <img src={Image1} alt="" className="h-[80vh] w-full object-cover" loading='lazy' />
                )}
            </div>

            <div className='flex justify-center mt-32'>
                <div className='flex flex-col justify-center items-center h-[40vh] w-[45%] about_heading'>
                    <h2>You Have To Try Us</h2>
                    <p>We invite you to our restaurant</p>
                </div>
                <div className='h-[100%] w-[45%] flex flex-col justify-center items-center'>
                    <img src={About1} alt="" className='rounded-tl-[40px] rounded-br-[40px] h-[60vh] shadow__custom' />
                </div>
            </div>

            <div className='bg-[#f5f5f5] text-center mt-20 prepared_section h' data-aos="fade-up">
                <h3>WE COOK FOR YOU EVERY DAY</h3>
                <h2>Cooking is our greatest passion,<br /> and we prove it every day</h2>
                <p>We love surprising our guests, so every day we serve new dishes inspired<br /> by recipes from many countries. Our restaurant combines Indian cuisine<br /> with Chinese, Italian or French specialties.</p>
            </div>

            <div className='flex justify-evenly mt-20 about__restaurant' data-aos="fade-up">
                <div className='h-[40%]'>
                    <img src={Restaurant} alt="" className='w-20 ' />
                    <p>Your place <br />in the city</p>
                </div>
                <div className=''>
                    <img src={Customer} alt="" className='w-20 ml-12' />
                    <p>The highest standards<br /> of service</p>
                </div>
                <div className=''>
                    <img src={Dinner} alt="" className='w-20 ml-6' />
                    <p>Aromatic coffee<br /> and chef's dishes</p>
                </div>
                <div className=''>
                    <img src={Interior} alt="" className='w-20 ml-6' />
                    <p>Unique decor <br />and atmosphere</p>
                </div>
            </div>

            <div className='flex justify-center mt-32 bg-[#f5f5f5]' data-aos="fade-up">
                <div className='flex flex-col justify-center items-center w-[45%] about__interior'>
                    <h2>WE FOCUS ON NEW TASTE SENSATIONS <br />AND A PLEASANT ATMOSPHERE</h2>
                    <h3>We guarantee delicious food and a unique atmosphere</h3>
                    <p>In our restaurant, you will sit comfortably in an armchair and relax after a hard day. In addition to the original and unique cuisine, smiling staff and a great atmosphere await you.</p>
                </div>
                <div className='h-[100%] w-[45%] flex flex-col justify-center items-center'>
                    <img src={About2} alt="" className='rounded-tl-[40px] rounded-br-[40px] h-[60vh] shadow__custom' />
                </div>
            </div>

            <div data-aos="fade-up" className='mt-20'>
                <section className="dark:bg-gray-900">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl font-medium text-gray-900 dark:text-white">"As a food enthusiast, I'm constantly seeking new culinary adventures, and FlavourFusion Cafe never disappoints. It's where innovation meets flavor, and I'm hooked"</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Jessica L</div>
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Beloved Customer</div>
                                    </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;