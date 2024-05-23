import FoodMaking from '../videos/sebastian-schuppik-H7xTpvBjJS4-unsplash_11zon.jpg';
import Scroll from './scroller/Scroll';
import './css/Home.css';
import Image1 from '../videos/paul-griffin-WWST6E8LxeE-unsplash_11zon.jpg'
import Image2 from '../videos/alessio-dandi-_wD7QwuGerk-unsplash.jpg'
function Home() {
  return (
    <>
      <div className="relative">
        <img src={FoodMaking} alt="" className="h-[80vh] w-full object-cover" loading='lazy' />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-[4rem] font-bold text-[#ffffff]" style={{ fontFamily: "'Briem Hand',cursive" }}>FlavourFusion Cafe</h2>
        </div>
      </div>

      <div className='mt-28 dishes__scroll'>
        <h2 className='text-center text-4xl font-extrabold'>Our Famous Dishes </h2>
        <Scroll />
      </div>

      <div className='flex justify-center mt-32'>
        <div className='flex flex-col justify-center items-center h-[40vh] w-[45%] home__display1'>
          <h2>THE CITY'S DINING ROOM</h2>
          <p>Inspired by the diverse and colorful culinary traditions of India, FlavorFusion Cafe brings a unique twist to the vibrant streets of downtown Toronto. Our menu is a celebration of India's rich tapestry of flavors, offering a fusion of traditional Indian dishes with global influences. From fragrant curries to spicy street food delights, every bite at FlavorFusion Cafe is a journey through the bustling markets and vibrant spice stalls of India. Join us for an unforgettable dining experience where every dish is a symphony of flavors, crafted with passion and creativity.</p>
        </div>
        <div className='h-[100%] w-[45%] flex flex-col justify-center items-center'>
          <img src={Image1} alt="" className='rounded-tl-[40px] rounded-br-[40px] h-[60vh] home__shadow__custom' />
        </div>
      </div>

      <div className='flex justify-center mt-32 mb-20'>
      <div className='h-[100%] w-[45%] flex flex-col justify-center items-center'>
          <img src={Image2} alt="" className='rounded-tl-[40px] rounded-br-[40px] h-[60vh] home__shadow__custom' />
        </div>
        <div className='flex flex-col justify-center items-center h-[40vh] w-[45%] home__display2'>
          <h2>HOLD COURT</h2>
          <p>Experience unmatched exclusivity with six distinct private dining experiences at FlavorFusion Cafe. Treat your guests to an intimate gathering in our carefully curated private spaces, each offering its own unique ambiance and charm. Whether you're hosting a cozy family celebration or a corporate event, our private dining options provide the perfect setting for any occasion. Indulge in personalized service and exquisite cuisine as you create unforgettable memories with your loved ones at FlavorFusion Cafe.</p>
        </div>
      </div>

    </>
  )
}


export default Home