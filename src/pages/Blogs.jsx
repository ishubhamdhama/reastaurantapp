import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image1 from '../images/pageImages/davide-cantelli-jpkfc5_d-DI-unsplash_1_11zon.jpg';
import calories from '../images/icons/calories.png';
import protein from '../images/icons/protein.png';
import sugar from '../images/icons/sugar.png';
import fiber from '../images/icons/high-fiber.png';
import fat from '../images/icons/trans-fat.png';
import carbs from '../images/icons/carb.png';
import loader from '../images/loader.svg';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

function Blogs() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://tasty.p.rapidapi.com/recipes/list', {
                    params: {
                        from: '0',
                        size: '30',
                        tags: 'under_30_minutes'
                    },
                    headers: {
                        'X-RapidAPI-Key': '5b67243e18msha288c5b28e0696ep148f45jsn3de11c4f10c1',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                setBlogData(response.data.results);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData(); // Call the async function immediately
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <>
            <div className="relative">
                <img src={Image1} alt="" className="h-[80vh] w-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <h2 className="text-[4rem] font-bold text-white">Blog</h2>
                </div>
            </div>

            {/* card--------------------------------------- */}

            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <img src={loader} alt="Loading..." />
                </div>
            )}

            <div className='grid grid-cols-3 gap-1 mt-7 ml-20'>
                {blogData.map(blog => (
                    <div key={blog.id} >
                        <Card className="w-full max-w-[26rem] shadow-lg">
                            <CardHeader floated={false} color="blue-gray">
                                <img
                                    src={blog.thumbnail_url}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray" className="font-bolder text-2xl">
                                        {blog.name}
                                    </Typography>
                                </div>
                                <Typography color="gray">
                                    {blog.description}
                                </Typography>
                                <div className="group mt-8 inline-flex flex-wrap items-center gap-3" >
                                    <Tooltip content={blog.nutrition.calories} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={calories} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                    <Tooltip content={blog.nutrition.carbohydrates} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={carbs} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                    <Tooltip content={blog.nutrition.fat} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={fat} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                    <Tooltip content={blog.nutrition.fiber} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={fiber} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                    <Tooltip content={blog.nutrition.protein} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={protein} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                    <Tooltip content={blog.nutrition.sugar} className="text-black">
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <img src={sugar} alt="" className='w-6' />
                                        </span>
                                    </Tooltip>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blogs;
