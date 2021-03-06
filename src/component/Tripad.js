import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import image from "../images/tripadvisor.png";
import image2 from "../images/heart.png";
import image3 from "../images/shield.png";
import image4 from "../images/calendar.png";
import image5 from "../images/head.png";

function Tripad() {
  return (
    <Wrapper>
      <div className='tripad'>
        <div className='tripad-container'>
          <div className='left-tripad'>
            <img src={image} alt='' />
            <div className='stars'>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <p>Rated 4.7 by thousands of travelers.</p>
          </div>
          <div className='right-tripad'>
            <div className='tripad-img'>
              <img src={image2} alt='' />
              <h4>Trusted by Millions</h4>
            </div>
            <div className='tripad-img'>
              <img src={image3} alt='' />
              <h4>Secure Online Payment</h4>
            </div>
            <div className='tripad-img'>
              <img src={image4} alt='' />
              <h4>Free Cancelation</h4>
            </div>
            <div className='tripad-img'>
              <img src={image5} alt='' />
              <h4>24/7 Support Service</h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .tripad-container {
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 30px;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 100px;
  }
  .left-tripad > img {
    height: 50px;
    margin-bottom: 10px;
  }
  .left-tripad svg {
    color: #34d6a5;
    margin-right: 5px;
    font-size: 1.3rem;
    margin-bottom: 0;
  }
  .left-tripad p {
    color: #333;
    font-size: 0.9rem;
    margin: 5px 0;
  }
  .right-tripad {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    h4 {
      color: #5e616f;
      font-weight: 400;
    }
  }
  .tripad-img {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  @media (max-width: 937px) {
    .tripad-container {
      max-width: 600px;
      grid-template-columns: none;
      grid-template-rows: auto;
      align-items: center;
      justify-content: center;
      row-gap: 20px;
    }
    .right-tripad {
      grid-row: span 1/2;
      margin-bottom: 30px;
    }
    .left-tripad p {
      text-align: center;
    }
    .left-tripad img {
      margin: 0 auto;
    }
    .stars {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
    .left-tripad svg {
      text-align: center;
    }
  }
  @media (max-width: 345px) {
    .right-tripad {
      margin-top: 60px;
      grid-template-columns: 1fr;
    }
  }
`;
export default Tripad;
