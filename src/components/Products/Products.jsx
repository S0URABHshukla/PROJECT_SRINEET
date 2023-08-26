import React, { useEffect, useState } from "react";
import products from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <div className={products.bg} style={{ padding: "0 10px", margin: "auto" }}>
      
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        style={{
          textAlign: "center",
          color: "goldenrod",
          fontSize: "28px",
          fontWeight: "600",
          padding: "10px",
        }}
      >
        Exceptionally Designed Products For Your Home
      </div>
      {/* <div className={products.container}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
        >
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/tabletop/Farmo-02_ImgID1.png"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Table Top
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
        >
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/wallhungbasin/Farmo-02_ImgID28.png"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
            style={{width:'100%'}}
          >
            Wall Hung Basin
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
        >
          
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/basinwithpedestal/Farmo-01_ImgID25.png"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-left"
            style={{width:'100%'}}
          >
            Basin With Pedestal
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
          
        >
          
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/onepiececloset/Farmo-04_ImgID3.png"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
            style={{width:'100%'}}
          >
            One Piece Closet
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
        >
          
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/darkseries/table-top-wash-basin-mirror-500x500.png"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
            style={{width:'100%'}}
          >
            Dark Series
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
          
        >
          
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="img/other/sanitary-ware-1627967186-5924976.jpeg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
            style={{width:'100%'}}
          >
            Other Products
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span style={{paddingLeft:'5px'}}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>

      </div> */}
      <div className={products.pro} >
        <div data-aos="fade-right"
          data-aos-duration="1000"><p className={products.prop}>SMART PRODUCTS</p>
        <p className={products.prop2}>At SRIneet, we constantly reinvent our products and bring you the innovative. Transform your space into a smart space with the latest intelligent bath and light products designed for efficiency, comfort, and convenience.</p></div>
        <div data-aos="fade-left"
          data-aos-duration="1000"><img className={products.pimg} src="img/darkseries/table-top-wash-basin-mirror-500x500.png" alt="img1" /></div>
      </div>
      <div className={products.pro} style={{marginTop:'50px'}}>
        <div data-aos="fade-right"
          data-aos-duration="1000" className={products.img2} ><img className={products.pimg} src="img/tabletop/Farmo-02_ImgID1.png" alt="" /></div>
        <div data-aos="fade-left"
          data-aos-duration="1000"><p className={products.prop}>UPGRADE YOUR SPACE</p><p className={products.prop2}> It's now easier than ever to give your space a makeover you deserve for. Visit your nearest SRIneet World or Orientation Center or Authorized Dealer to know more to choose from the wide range of complete bathroom and lighting solutions.</p></div>
      </div>
    </div>
  );
}

export default Products;
