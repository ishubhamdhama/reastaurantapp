import React from 'react';
import Image1 from '../images/pageImages/brooke-lark-M4E7X3z80PQ-unsplash_11zon.jpg';
import MenuImage from '../images/menu/Black Gold Elegant Food Menu.jpg';

function Menu() {
    return (
        <>
            <div className="relative">
                <img src={Image1} alt="" className="h-[80vh] w-full object-cover" loading='lazy' />
            </div>
            <div className='flex flex-col'>
                <h2 className="text-[4rem] font-bold text-center" style={{fontFamily: "Poetsen One"}}>Menu</h2>
                <div className="flex justify-center shadow-md"> {/* Center the image */}
                    <img src={MenuImage} alt="menu_image" className='w-[60%]' />
                </div>
            </div>
        </>
    )
}

export default Menu