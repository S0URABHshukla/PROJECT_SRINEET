import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
// new Splide( '.splide' ).mount( { AutoScroll } );
// const splide = new Splide( '.splide', {
//     type   : 'loop',
//     drag   : 'free',
//     focus  : 'center',
//     perPage: 3,
//     AutoScroll: {
//       speed: -1,
//     },
//   } );
  

const ImageSlider = () => {
  const images = [
    'https://5.imimg.com/data5/SELLER/Default/2021/9/FN/SV/JB/46524169/sanitaryware-jaquar.jpeg',
    'https://www.cera-india.com/sites/default/files/2021-04/03%20-%20Sanitaryware%20-%20Wash%20basins%20thumbnail.jpg',
    'https://www.toyoindia.in/wp-content/uploads/cat-black-series-menu.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2021/9/FN/SV/JB/46524169/sanitaryware-jaquar.jpeg',
    'https://www.aquantindia.com/images/Aquant-Special-Finish-Toilets.jpg',
    'https://www.toyoindia.in/wp-content/uploads/cat-black-series-menu.jpg',
  ];

  return (
    <>
    <h1 
    data-aos="zoom-out-up"
        data-aos-duration="1000" 
        style={{textAlign:'center', color:'goldenrod',fontSize:'28px',fontWeight:'600',paddingTop:'15px',marginBottom:'-15px'}}>BestSelling Products</h1>

    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        autoWidth: '200px',
      }}
      >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <img style={{width:'400px', height:'400px'}} src={image} alt={`Image ${index}`} />
        </SplideSlide>
      ))}
    </Splide>
      </>
  );
};

export default ImageSlider;
