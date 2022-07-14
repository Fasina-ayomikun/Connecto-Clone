import React from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import PartnerpageHero from "../component/PartnerpageHero";
import image1 from "../images/car.png";
import image2 from "../images/meter.png";
import image3 from "../images/desktop.png";
function PartnerPage() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <PartnerpageHero />
        <section className='why-section'>
          <div className='why-container'>
            <h2>why partners choose us</h2>
            <div className='whys'>
              <div className='why'>
                <div className='why-title'>
                  <img src={image1} alt='' />
                  <h5>Fleet and Transfer Management</h5>
                </div>
                <p>
                  We allow our partners to seamlessly manage their fleet and
                  transfer all from one app. With Connecto, you can be sure of
                  efficiency in fleet and transfer management.
                </p>
              </div>
              <div className='why'>
                <div className='why-title'>
                  <img src={image2} alt='' />
                  <h5>Increasing Efficiency</h5>
                </div>
                <p>
                  We have optimized our processes to ensure that you get the
                  best value for your time. Say goodbye to empty miles and say
                  hello to a more optimized transfer allocation system. We do
                  all the heavy lifting so you can focus on driving.
                </p>
              </div>
              <div className='why'>
                <div className='why-title'>
                  <img src={image3} alt='' />
                  <h5>Admin and Driver App</h5>
                </div>
                <p>
                  We allow our partners to seamlessly manage their fleet and
                  transfer all from one app. With Connecto, you can be sure of
                  efficiency in fleet and transfer management.
                </p>
              </div>
            </div>
            <button className='btn'>
              <a href='3'>Become a Partner</a>
            </button>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .partnerpage-hero {
    position: relative;
  }
  .partnerpage-hero > img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
    height: 100%;
  }
  .partnerpage-container {
    margin: 0 auto;
    max-width: var(--max-width);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div {
      background-color: #fff;
      width: 500px;
      height: 450px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      justify-content: center;
      box-shadow: 1px -2px 20px 2px #e9e6e6;
      h1 {
        font-size: 2.7rem;
        font-weight: 900;
        line-height: 1.1;
        margin: 10px 0;
        z-index: 1;
      }
      p {
        color: #5e616f;
        font-size: 0.95rem;
      }
      form {
        display: flex;
        column-gap: 30px;
      }
      input {
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #ccc;

        width: 130%;
        text-transform: capitalize;
      }
      position: relative;
    }
  }
  button {
    background-color: var(--border-color);
    border: 0;
    padding: 12px 15px;
    border-radius: 5px;
    width: 100%;
    a {
      color: #fff;
      text-transform: capitalize;
      font-size: 0.9rem;
    }
  }
  .partnerpage-container > div::before {
    width: 150px;
    content: "";
    height: 150px;
    border-radius: 50%;
    border: 70px solid var(--gradient-blue);
    background-color: transparent;
    opacity: 0.1;
    position: absolute;
    top: -23%;
    right: -26%;
  }
  /* why */
  .why-section {
    padding: 0 30px;
    height: 80vh;
    display: flex;
    align-items: center;
  }
  .why-container {
    margin: 0 auto;
    max-width: var(--max-width);
    h2 {
      text-align: center;
      text-transform: capitalize;
      font-size: 3rem;
      margin: 0;
    }
  }
  .why-title {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    h5 {
      font-size: 1rem;
      margin: 0;
    }
  }
  .whys p {
    display: block;
    color: #5e616f;
    font-size: 0.95rem;
  }
  .whys {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    justify-content: center;

    column-gap: 30px;
  }
  .why {
    padding: 0;
  }
  .why-container button {
    margin: 0px auto;
    width: 20%;
    display: flex;
    justify-content: center;
  }
`;
export default PartnerPage;
