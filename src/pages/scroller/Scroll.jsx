import React, { useEffect } from 'react';
import './Scroll.css'; 
import image1 from '../../images/cuisine/georgia-z-JG5lgvc57qE-unsplash.jpg'
import image2 from '../../images/cuisine/natalia-gusakova-U82DAzkfX7c-unsplash.jpg'
import image3 from '../../images/cuisine/orijit-chatterjee-wEBg_pYtynw-unsplash.jpg'
import image4 from '../../images/cuisine/tim-toomey-GH2JWMhZTxM-unsplash.jpg'
import image5 from '../../images/cuisine/tomoyo-s-VhuC3z2o8vQ-unsplash.jpg'
import image6 from '../../images/cuisine/yubraj-timsina-M3YTtDgj1B8-unsplash.jpg'

const Scroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-direction="right" data-speed="slow">
      <div className="scroller__inner">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>
  );
};

export default Scroll;
