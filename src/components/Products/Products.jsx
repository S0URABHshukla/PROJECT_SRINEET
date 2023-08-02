import React, { useEffect, useState } from "react";
import products from "./Products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Products() {
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };
    const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleHoverExit2 = () => {
    setIsHovered2(false);
  };
    const [isHovered3, setIsHovered3] = useState(false);

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleHoverExit3 = () => {
    setIsHovered3(false);
  };
    const [isHovered4, setIsHovered4] = useState(false);

  const handleHover4 = () => {
    setIsHovered4(true);
  };

  const handleHoverExit4 = () => {
    setIsHovered4(false);
  };

  const hoverStyles = {
    backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    border: isHovered ? '2px solid goldenrod' : 'none',
    borderTopWidth: isHovered ? '10px' : '0',
    borderLeftWidth: isHovered ? '10px' : '0',
  };
  const hoverStyles2 = {
    backgroundColor: isHovered2 ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    border: isHovered2 ? '2px solid goldenrod' : 'none',
    borderTopWidth: isHovered2 ? '10px' : '0',
    borderLeftWidth: isHovered2 ? '10px' : '0',
  };
  const hoverStyles3 = {
    backgroundColor: isHovered3 ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    border: isHovered3 ? '2px solid goldenrod' : 'none',
    borderTopWidth: isHovered3 ? '10px' : '0',
    borderLeftWidth: isHovered3 ? '10px' : '0',
  };
  const hoverStyles4 = {
    backgroundColor: isHovered4 ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    border: isHovered4 ? '2px solid goldenrod' : 'none',
    borderTopWidth: isHovered4 ? '10px' : '0',
    borderLeftWidth: isHovered4 ? '10px' : '0',
  };
  return (
    <div className={products.bg} style={{ padding: "0px 10%", margin: "auto" }}>
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
        Exceptionally designed products for your home
      </div>
      <div className={products.container}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <div className={products.hover} style={hoverStyles}></div>
          <div className={products.border}></div>
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
          onMouseEnter={handleHover2}
          onMouseLeave={handleHoverExit2}
        >
          <div className={products.hover} style={hoverStyles2}></div>
          <div className={products.border}></div>
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
          onMouseEnter={handleHover3}
          onMouseLeave={handleHoverExit3}
        >
          <div className={products.hover} style={hoverStyles3}></div>
          <div className={products.border}></div>
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
          onMouseEnter={handleHover4}
          onMouseLeave={handleHoverExit4}
        >
          <div className={products.hover} style={hoverStyles4}></div>
          <div className={products.border}></div>
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

        {/* <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={products.productsContainer}
          style={{ position: "relative" }}
        >
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Explore
            <span>
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
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span>
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
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Explore
            <span>
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
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span>
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
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            Explore
            <span>
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
          <div className={products.hover}></div>
          <div className={products.border}></div>
          <img
            className={products.img}
            style={{ width: "100%", height: "100%" }}
            src="https://jaljoy.com/wp-content/uploads/2020/12/one_piece_closet.jpg"
            alt=""
          />
          <p
            className={products.name}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Sanitaryware
          </p>
          <p
            className={products.explore}
            data-aos-duration="1000"
            data-aos="flip-right"
          >
            Explore
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Products;
