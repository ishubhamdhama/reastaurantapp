import { useState, useEffect } from 'react';
import Image1 from '../images/pageImages/lily-banse--YHSwy6uqvk-unsplash_3_11zon.jpg';
import './css/Gallery.css';

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.pexels.com/v1/search/?query=food&per_page=24', {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const responseData = await response.json();
        setLoading(false);
        setData(responseData.photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };

    getPhotos();
  }, []);
  return (
    <>
      <div className="relative">
        <img src={Image1} alt="" className="h-[80vh] w-full object-cover" loading='lazy' />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-[4rem] font-bold text-white">Gallery</h2>
        </div> 
      </div>
      <div className='gallery__heading'>
        <h2 className='text-4xl font-bold text-center'>Our Famous dish</h2>
      </div>
      <div className="gallery">
        {data.map(photo => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src.portrait} alt={photo.alt} className="gallery-image" />
            <div className="image-overlay">
              <h3 className="image-title text-center">{photo.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery