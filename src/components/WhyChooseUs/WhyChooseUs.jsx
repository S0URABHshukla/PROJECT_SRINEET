import React from "react";
import why from "./WhyChooseUs.module.css";
import Box from '@mui/material/Box';
function WhyChooseUs() {
  return (
    <Box>
    <div
    data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="700"
      className={why.p}
      style={{
        width:'100%',
        // marginBottom:'-90px',
        padding: "70px",
        paddingTop:'40px',
        height:'578px',
        backgroundImage: 'url("./customer.jpg")',
        // backgroundImage: 'url("https://media.istockphoto.com/id/1157105049/photo/portrait-of-her-she-nice-charming-cute-attractive-lovely-cheerful-wavy-haired-girl-in-checked.jpg?s=612x612&w=0&k=20&c=kwtdYmos8YyFRsbHcdNBs6JCy53_e65MECnR2pdnzIg=")',
        backgroundRepeat:'no-repeat',
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div className={why.blur}></div>
      <div className={why.ptag}>
        <p
          style={{
            textAlign: "left",
            fontSize: "28px",
            fontWeight: "600",
            padding: "10px",
          }}
          data-aos="fade-left" data-aos-duration="1000"
        >
          Why <span style={{ color: "goldenrod" }}>Choose Us?</span>
        </p>
        <p data-aos="fade-right" data-aos-duration="1000">
          <strong>
            SRIneet was built on the platform of customer satisfaction, innovation
            & Quality Control to revolutionize the industry in India. SRIneet has
            remained true to its core value.
          </strong>
        </p>
        <p data-aos="fade-left" data-aos-duration="1000">
          We have always worked our best to be innovation-driven and future
          focused business to create refreshing experiences for the changing needs
          of the consumer.
        </p>

        <p data-aos="fade-right" data-aos-duration="1000">
          We aim to create compelling ideas that transform the quality of life &
          make a difference. Since inception, we have consistently diversified our
          product portfolio, High-end versions that exude a lifestyle statement in
          their very form.
        </p>
        <p data-aos="fade-left" data-aos-duration="1000">
          A combination of breakthrough technologies and path-breaking innovation
          with a wide product range and positive brand image has helped us create
          indelible imprints in the mind of our valued customer.
        </p>
        <p data-aos="fade-right" data-aos-duration="1000">
          SRIneet is a combined result of our consistent pursuit of innovation and
          penchant for consumer delight. The moment you will surf forward, You
          will discover the complete spectrum of breathtaking designs never seen
          before products as well as, Every dimension of your fascination.
        </p>
      </div>
    </div>
    </Box>
  );
}

export default WhyChooseUs;
