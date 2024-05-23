import React from 'react';
import image1 from '../images/pageImages/siniz-kim-aWWl29-VX7Y-unsplash_11zon.jpg';
import submit from '../images/menu/vecteezy_3d-male-character-pointing-left_24132241.png';

function FormSubmitted() {
  return (
    <>
      <div className="relative h-[100vh] flex bg-[#344C64] items-center">
        <img src={submit} alt="" className='h-[80vh] mt-20'/>
        <div>
          <h2 className='text-white mb-20 text-4xl'>Your reservation is successfully submitted.</h2>
        </div>
      </div>
    </>
  )
}

export default FormSubmitted